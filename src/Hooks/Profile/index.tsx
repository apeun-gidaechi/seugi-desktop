import { fetchingProfile } from '@/Api/profile';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import React, { useState, useEffect, useRef } from 'react';
import { getMyInfos } from '@/Api/profile';
import Cookies from 'js-cookie';

const index = () => {
    const workspaceId = typeof window !== 'undefined' ? Cookies.get('workspaceId') : null;
    const [isEditing, setIsEditing] = useState<string | null>(null);
    const [picture, setPicture] = useState('');
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [profileData, setProfileData] = useState<{
        status: string;
        spot: string;
        belong: string;
        phone: string;
        wire: string;
        location: string;
    }>({
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
                if (workspaceId) {
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

    const startEditing = (field: string) => {
        setIsEditing(field);
    };

    const saveProfileData = async (field: keyof typeof profileData, value: string) => {
        try {
            if (workspaceId) {
                await SeugiCustomAxios.patch(`/profile/${workspaceId}`, {
                    status: field === "status" ? value : profileData.status,
                    spot: field === "spot" ? value : profileData.spot,
                    belong: field === "belong" ? value : profileData.belong,
                    phone: field === "phone" ? value : profileData.phone,
                    wire: field === "wire" ? value : profileData.wire,
                    location: field === "location" ? value : profileData.location,
                });

                setProfileData(prevData => ({
                    ...prevData,
                    [field]: value
                }));

                setIsEditing(null);
            }
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

    const handleImageChange = async () => {
        try {
            const res = await getMyInfos();
        } catch (err) {
            console.error(err);
        }
    }


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
    };
};

export default index;
