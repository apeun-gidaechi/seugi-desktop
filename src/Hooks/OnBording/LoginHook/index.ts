import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from '@/Api/SeugiCutomAxios';
import { useUserDispatchContext } from '@/Contexts/userContext';
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { getMyWorkspaces } from "@/Api/workspace";
import { getMyInfos } from "@/Api/profile";
import { paths } from "@/Constants/paths";
import Cookies from "js-cookie";

// Apple Sign-In 타입 선언 추가
declare global {
    interface Window {
        AppleID: {
            auth: {
                init: (params: {
                    clientId: string;
                    scope: string;
                    redirectURI: string;
                    usePopup: boolean;
                }) => void;
                signIn: () => Promise<{
                    authorization: {
                        code: string;
                        id_token: string;
                        state: string;
                    };
                    user?: {
                        email: string;
                        name: {
                            firstName: string;
                            lastName: string;
                        };
                    };
                }>;
            };
        };
    }
}

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

    const fcmToken = Cookies.get('fcmToken');

    const manageWorkspace = async () => {
        try {
            const lastWorkspace = Cookies.get("lastworkspace");
            const checkWorkspaces = await getMyWorkspaces();

            if (!checkWorkspaces || checkWorkspaces.length === 0) {
                console.error("워크스페이스를 찾을 수 없습니다.");
                navigate(paths.home);
                return;
            }

            if (lastWorkspace) {
                Cookies.set("workspaceId", lastWorkspace);
            } else {
                Cookies.set("workspaceId", checkWorkspaces[0].workspaceId);
            }

            Cookies.remove('lastworkspace');
            navigate(paths.home);
        } catch (error) {
            console.log("Error fetching workspace:", error);
            setAlertMessage("워크스페이스 정보를 가져오는 중 오류가 발생했습니다.\n새로고침 후 다시 시도해주세요");
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
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
                throw new Error("Login failed");
            }

            const { accessToken, refreshToken } = res.data.data;

            setAccessToken(accessToken);
            Cookies.set("accessToken", accessToken);
            Cookies.set("refreshToken", refreshToken);

            await manageWorkspace();
            await getMyInfo();
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
                    throw new Error("Google login failed");
                }

                const { accessToken, refreshToken } = res.data.data;

                Cookies.set("accessToken", accessToken);
                Cookies.set("refreshToken", refreshToken);

                await manageWorkspace();
                await getMyInfo();
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
            setAlertMessage("구글 로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
            setShowAlert(true);
        },
    });

    const handleAppleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            // window.AppleID가 존재하는지 확인
            if (typeof window.AppleID === 'undefined') {
                throw new Error("Apple Sign-In SDK is not loaded");
            }

            const response = await window.AppleID.auth.signIn();
            const { authorization } = response;

            if (authorization && authorization.code) {
                const appleAuthResponse = await axios.post(`${SERVER_URL}/oauth/apple/authenticate`, {
                    code: authorization.code,
                    token: fcmToken,
                    platform: "WEB",
                    name: response.user?.name
                });

                if (appleAuthResponse.status !== 200) {
                    throw new Error("Apple login failed");
                }

                const { accessToken, refreshToken } = appleAuthResponse.data.data;

                Cookies.set("accessToken", accessToken);
                Cookies.set("refreshToken", refreshToken);

                await manageWorkspace();
                await getMyInfo();
            } else {
                throw new Error("No authorization code received from Apple");
            }
        } catch (error) {
            console.error("Apple login error:", error);
            setAlertMessage("애플 로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
            setShowAlert(true);
        }
    };

    useEffect(() => {
        // Apple Sign-In 스크립트 로드
        const loadAppleScript = () => {
            const script = document.createElement('script');
            script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
            script.async = true;
            script.onload = () => {
                if (typeof window.AppleID !== 'undefined') {
                    window.AppleID.auth.init({
                        clientId: 'com.seugi.services',
                        scope: 'email name',
                        redirectURI: 'https://seugi.com/login',
                        usePopup: true
                    });
                } else {
                    console.error("Apple Sign-In SDK failed to load");
                }
            };
            document.body.appendChild(script);
        };

        loadAppleScript();

        // 컴포넌트 언마운트 시 스크립트 제거
        return () => {
            const script = document.querySelector('script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return {
        email,
        password,
        showPassword,
        showAlert,
        alertMessage,
        setEmail,
        setPassword,
        setShowPassword,
        handleLogin,
        handleKeyDown,
        handleCloseAlert,
        handleGoogleLogin,
        handleAppleLogin
    }
}

export default index;