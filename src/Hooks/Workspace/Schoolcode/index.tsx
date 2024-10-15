import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getWorkspaceCode } from '@/Api/workspace';
import { paths } from '@/Constants/paths';
import Cookies from 'js-cookie';

const index = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState<string[]>(Array(6).fill(""));
    const token = Cookies.get("accessToken");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleContinue = async () => {
        const verificationCode = code.join("");

        try {
            await getWorkspaceCode(verificationCode);
            navigate(paths.joinsuccess, { state: { verificationCode } });
        } catch (error) {
            console.error("Error sending code:", error);
        }
    };

    const handleCodeChange = (updatedCode: string[]) => {
        setCode(updatedCode);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleContinue();
        }
    };

    const Backclick = () => {
        navigate(paths.selectschool);
    };
    return {
        token,
        Backclick,
        handleKeyDown,
        handleContinue,
        handleCodeChange,
    }
}

export default index