import { fetchingProfile } from '@/Api/profile';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import React, { useState, useEffect, useRef } from 'react';

const index = () => {
    const workspaceId = window.localStorage.getItem("workspaceId");
    const [isEditing, setIsEditing] = useState(null);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [name, setName] = useState('');
    const [profileData, setProfileData] = useState({
        status: "",
        spot: "",
        belong: "",
        phone: "",
        wire: "",
        location: ""
    });
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                if (workspaceId !== null) {
                    const Profiles = await fetchingProfile(workspaceId);

                    setProfileData(Profiles);
                    setName(Profiles.nick);
                }
            } catch (error) {
                console.error('Failed to fetch profile data.', error);
            }
        };
        fetchProfileData();
    }, [workspaceId]);

    const startEditing = (field: any) => {
        setIsEditing(field);
    };

    const saveProfileData = async (field: any, value: string) => {
        try {
            await SeugiCustomAxios.patch(`/profile/${workspaceId}`,
                {
                    status: field === "status" ? value : profileData.status,
                    spot: field === "spot" ? value : profileData.spot,
                    belong: field === "belong" ? value : profileData.belong,
                    phone: field === "phone" ? value : profileData.phone,
                    wire: field === "wire" ? value : profileData.wire,
                    location: field === "location" ? value : profileData.location,
                },);

            setProfileData(prevData => ({
                ...prevData,
                [field]: value
            }));

            setIsEditing(null);
        } catch (error) {
            console.error('프로필 저장 실패', error);
        }
    };

    const cancelEditing = () => {
        setIsEditing(null);
    };

    const toggleSetting = () => {
        setIsSettingOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node | null;

            if (
                dialogRef.current &&
                !dialogRef.current.contains(target) &&
                !(target && (target as Element).closest('.SettingButton'))
            ) {
                setIsSettingOpen(false);
            }
        };

        if (isSettingOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSettingOpen]);

    const handleNameChange = (newName: string) => {
        setName(newName);
    };

    return {
        name,
        isEditing,
        profileData,
        isSettingOpen,
        startEditing,
        saveProfileData,
        cancelEditing,
        toggleSetting,
        handleNameChange
    }
}

export default index