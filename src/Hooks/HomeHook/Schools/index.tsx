import React, { useEffect, useRef, useState } from 'react'
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import { WorkspaceName } from '@/Api/workspace';

const index = () => {
    const [workspaceName, setWorkspaceName] = useState("");
    const [showChangeschool, setShowChangeschool] = useState(false);
    const ChangeSchoolRef = useRef<HTMLDivElement>(null);
    const workspaceId = window.localStorage.getItem('workspaceId');
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
        if (workspaceId !== null) {
            const workspaceNms = await WorkspaceName(workspaceId);

            setWorkspaceName(workspaceNms.workspaceName);
        }
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