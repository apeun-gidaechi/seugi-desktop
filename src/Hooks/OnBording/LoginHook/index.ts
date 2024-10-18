import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from '@/Api/SeugiCutomAxios';
import { useUserDispatchContext } from '@/Contexts/userContext';
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { getMyWorkspaces } from "@/Api/workspace";
import { getMyInfos } from "@/Api/profile";
import { paths } from "@/Constants/paths";
import { appleAuthHelpers } from "react-apple-signin-auth";
import Cookies from 'js-cookie';

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

const index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const fcmToken = window.localStorage.getItem('fcmToken');

    const manageWorkspace = async () => {
        try {
            const lastWorkspace = window.localStorage.getItem("lastworkspace");
            const checkWorkspaces = await getMyWorkspaces();

            if (!checkWorkspaces || checkWorkspaces.length === 0) {
                console.error("워크스페이스를 찾을 수 없습니다.");
                navigate(paths.home);
                return;
            }

            if (lastWorkspace) {
                window.localStorage.setItem("workspaceId", lastWorkspace);
            } else {
                window.localStorage.setItem("workspaceId", checkWorkspaces[0].workspaceId);
            }

            window.localStorage.removeItem('lastworkspace');
            navigate(paths.home);
        } catch (error) {
            console.log("Error fetching workspace:", error);
            setAlertMessage("워크스페이스 정보를 가져오는 중 오류가 발생했습니다.");
            setShowAlert(true);
        }
    };

    const handleLogin = async () => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/member/login`,
            {
                email,
                password,
                token: fcmToken,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (res.status !== 200) {
            return;
        }

        const { accessToken, refreshToken } = res.data.data;

        setAccessToken(accessToken);
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);

        // manageWorkspace 호출 전에 getMyInfo로 사용자 정보 가져오기
        getMyInfo();
        manageWorkspace();
    } catch (error) {
        setAlertMessage(
            "등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다"
        );
        setShowAlert(true);
        console.log(error);
    }
};

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const setUser = useUserDispatchContext();

    const getMyInfo = async () => {
        const MyInfos = await getMyInfos();
        setUser(MyInfos);
    }

    const refreshAccessToken = async () => {
        const refreshToken = window.localStorage.getItem("refreshToken");
        if (!refreshToken) {
            console.log("리프레시 토큰이 없습니다.");
            return;
        }
    
        try {
            const response = await axios.post(`${SERVER_URL}/auth/refresh?token=${refreshToken}`);
    
            const { accessToken, refreshToken: newRefreshToken } = response.data.data;
            setAccessToken(accessToken);
            window.localStorage.setItem("accessToken", accessToken);
            window.localStorage.setItem("refreshToken", newRefreshToken);
        } catch (error) {
            console.error("리프레시 토큰 요청 중 오류:", error);
            // 추가적인 에러 처리 (예: 로그아웃)
        }
    };

    const handleGoogleLogin = useGoogleLogin({
        flow: "auth-code",
        scope: "email profile",
        onSuccess: async ({ code }) => {
            try {
                const res = await axios.post(
                    `${SERVER_URL}/oauth/google/authenticate`,
                    {
                        code,
                        token: fcmToken,
                        platform: "WEB"
                    }
                );

                if (res.status !== 200) {
                    return;
                }

                const { accessToken, refreshToken } = res.data.data;

                window.localStorage.setItem("accessToken", accessToken);
                window.localStorage.setItem("refreshToken", refreshToken);

                manageWorkspace();
            } catch (error) {
                setAlertMessage(
                    "구글 로그인 중 오류가 발생했습니다. 다시 시도해주세요."
                );
                setShowAlert(true);
                console.log(error);
            }
        },
        onError: (errorResponse: any) => {
            console.error(errorResponse);
        },
    });

    const handleAppleLogin = async (e: any) => {
        e.preventDefault();

        appleAuthHelpers.signIn({
            authOptions: {
                clientId: 'com.seugi.services',
                scope: "email name",
                redirectURI: "https://api.seugi.com/oauth2/code/apple",
                usePopup: true
            },
        });
    };

    useEffect(() => {
        const handleSuccess = async (response: any) => {
            const code = response.authorization.code;
            const name = response.user?.name;
            try {
                const token = await axios.post(`${SERVER_URL}/oauth/apple/authenticate`, {
                    code,
                    token: fcmToken,
                    platform: "WEB",
                    name: name
                });

                const { accessToken, refreshToken } = token.data.data;

                Cookies.set("accessToken", accessToken);
                Cookies.set("refreshToken", refreshToken);
                manageWorkspace();
            } catch (error) {
                console.error("애플 로그인 처리 중 오류:", error);
            }
        };

        const handleFailure = (error: any) => {
            console.error("Apple login error: ", error);
            setAlertMessage("애플 로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
            setShowAlert(true);
        };

        document.addEventListener('AppleIDSignInOnSuccess', handleSuccess);
        document.addEventListener('AppleIDSignInOnFailure', handleFailure);

        return () => {
            document.removeEventListener('AppleIDSignInOnSuccess', handleSuccess);
            document.removeEventListener('AppleIDSignInOnFailure', handleFailure);
        };
    }, []);

    return {
        email,
        password,
        showPassword,
        showAlert,
        alertMessage,
        setEmail,
        handleLogin,
        setPassword,
        setShowPassword,
        manageWorkspace,
        handleKeyDown,
        handleCloseAlert,
        getMyInfo,
        handleGoogleLogin,
        handleAppleLogin
    }
}

export default index;