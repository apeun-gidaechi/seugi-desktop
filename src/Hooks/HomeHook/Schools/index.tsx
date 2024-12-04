import React, { useEffect, useRef, useState } from 'react';
import { WorkspaceName } from '@/Api/workspace';
import Cookies from 'js-cookie';

const index = () => {
    const [workspaceName, setWorkspaceName] = useState<string>('');
    const [showChangeschool, setShowChangeschool] = useState<boolean>(false);
    const ChangeSchoolRef = useRef<HTMLDivElement>(null);
    const workspaceId = typeof window !== 'undefined' ? Cookies.get('workspaceId') : null;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node | null;

            if (
                ChangeSchoolRef.current &&
                !ChangeSchoolRef.current.contains(target) &&
                !(target && (target as Element).closest('.ChangeSchool')) && 
                !(target && (target as Element).closest('.Calendar'))
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
        if (workspaceId) { 
            const workspaceNms = await WorkspaceName(workspaceId);
            setWorkspaceName(workspaceNms.workspaceName);
        } else {
            console.error('워크스페이스 ID가 없습니다.');
        }
    };

    useEffect(() => {
        getWorkspaceName();
    }, [workspaceId]);

    const handleOnClicked = () => {
        setShowChangeschool(!showChangeschool);
    };

    return {
        workspaceName,
        showChangeschool,
        ChangeSchoolRef,
        getWorkspaceName,
        handleOnClicked,
    };
}

export default index;
