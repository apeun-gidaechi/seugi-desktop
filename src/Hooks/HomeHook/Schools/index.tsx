import React, { useEffect, useRef, useState } from 'react'
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';

const index = () => {
    const [workspaceName, setWorkspaceName] = useState("");
    const [showChangeschool, setShowChangeschool] = useState(false);
    const ChangeSchoolRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node | null;

            if (
                ChangeSchoolRef.current &&
                !ChangeSchoolRef.current.contains(target) &&
                !(target && (target as Element).closest('.ChangeSchool'))
            ) {
                setShowChangeschool(false);
            }
        };

        if (showChangeschool) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showChangeschool]);

    const getWorkspaceName = async () => {
        const workspaceId = window.localStorage.getItem("workspaceId");

        const res = await SeugiCustomAxios.get(`/workspace/${workspaceId}`);

        setWorkspaceName(res.data.data.workspaceName);
    };

    useEffect(() => {
        getWorkspaceName();
    }, []);

    const handleOnClicked = () => {
        setShowChangeschool(!showChangeschool);
    };

    return {
        workspaceName,
        showChangeschool,
        ChangeSchoolRef,
        getWorkspaceName,
        handleOnClicked,
    }
}

export default index