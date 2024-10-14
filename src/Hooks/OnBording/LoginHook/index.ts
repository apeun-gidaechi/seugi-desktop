import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from '@/Api/SeugiCutomAxios';
import { useUserDispatchContext } from '@/Contexts/userContext';
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { getMyWorkspaces } from "@/Api/workspace";
import { getMyInfos } from "@/Api/profile";
import { paths } from "@/Constants/paths";

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

            manageWorkspace();
            getMyInfo();
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
                    { code }
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
        handleGoogleLogin
    }
}

export default index