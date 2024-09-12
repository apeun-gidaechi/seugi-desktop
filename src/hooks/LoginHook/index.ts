import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from '@/Api/SeugiCutomAxios';
import { useUserDispatchContext } from '@/Contexts/userContext';
import axios from "axios";
import config from "@/constants/config/config.json";
import { SeugiCustomAxios } from "@/Api/SeugiCutomAxios";
import { useGoogleLogin } from "@react-oauth/google";

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

    const getOneWorkspaceIdAndSet = async () => {
        const token = window.localStorage.getItem("accessToken");
        const res = await axios.get(`${config.serverurl}/workspace/`, {
            headers: {
                Authorization: `${token}`,
            },
        });

        window.localStorage.setItem("workspaceId", res.data.data[0].workspaceId);
    };

    const importWorkspace = async () => {
        try {
            const token = window.localStorage.getItem("accessToken");
            const res = await axios.get(`${config.serverurl}/workspace/`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            console.log(res.data.data.length);

            if (res.data.data && res.data.data.length === 0) {
                navigate("/unhome");
            } else {
                getOneWorkspaceIdAndSet().then(() => {
                    navigate("/home");
                });
            }
        } catch (error) {
            console.log("Error fetching workspace:", error);
            setAlertMessage("워크스페이스 정보를 가져오는 중 오류가 발생했습니다.");
            setShowAlert(true);
        }
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                `${config.serverurl}/member/login`,
                {
                    email,
                    password,
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

            importWorkspace();
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
        const res = await SeugiCustomAxios.get(`/member/myInfo`);
        setUser(res.data.data);
    }

    const handleGoogleLogin = useGoogleLogin({
        flow: "auth-code",
        scope: "email profile",
        onSuccess: async ({ code }) => {
            try {
                const res = await axios.post(
                    `${config.serverurl}/oauth/google/authenticate`,
                    { code }
                );

                if (res.status !== 200) {
                    return;
                }

                const { accessToken, refreshToken } = res.data.data;

                window.localStorage.setItem("accessToken", accessToken);
                window.localStorage.setItem("refreshToken", refreshToken);

                importWorkspace();
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
        getOneWorkspaceIdAndSet,
        handleKeyDown,
        handleCloseAlert,
        getMyInfo,
        handleGoogleLogin
    }
}

export default index