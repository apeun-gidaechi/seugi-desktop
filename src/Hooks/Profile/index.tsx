// src/types/profile.ts
export type ProfileField = 'status' | 'spot' | 'belong' | 'phone' | 'wire' | 'location';

export interface ProfileData {
    status: string;
    spot: string;
    belong: string;
    phone: string;
    wire: string;
    location: string;
    nick?: string;
}

// src/hooks/Profile/index.ts
import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { fetchingProfile, getMyInfos } from '@/Api/profile';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';

const useProfile = () => {
    const workspaceId = typeof window !== 'undefined' ? Cookies.get('workspaceId') : null;
    const [isEditing, setIsEditing] = useState<ProfileField | null>(null);
    const [picture, setPicture] = useState('');
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [profileData, setProfileData] = useState<ProfileData>({
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
                    const profiles = await fetchingProfile(workspaceId);
                    setProfileData(profiles);
                    setName(profiles.nick || '');
                }
            } catch (error) {
                console.error('Failed to fetch profile data.', error);
            }
        };
        fetchProfileData();
    }, [workspaceId]);

    const startEditing = (field: ProfileField) => {
        setIsEditing(field);
    };

    const saveProfileData = async (field: ProfileField, value: string) => {
        try {
            if (!workspaceId) return;

            const updatedData = {
                ...profileData,
                [field]: value
            };

            await SeugiCustomAxios.patch(`/profile/${workspaceId}`, updatedData);

            setProfileData(updatedData);
            setIsEditing(null);
        } catch (error) {
            console.error('프로필 저장 실패', error);
        }
    };

    const cancelEditing = () => {
        setIsEditing(null);
    };

    const toggleSetting = () => {
        setIsSettingOpen(prev => !prev);
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
        handleNameChange,
        dialogRef
    };
};

export default useProfile;
