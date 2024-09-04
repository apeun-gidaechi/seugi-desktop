import React, { useState, useEffect, useRef } from 'react';
import * as S from '@/components/Home/Notification/Notification.style';
import CustomAlert from '@/components/Alert/Alert';

import Emoji from "@/assets/image/home/emoji.svg";
import NotificationImg from "@/assets/image/home/notification.svg";
import CorrectionImg from '@/assets/image/home/Correction.svg';
import AddEmoji from '@/components/Home/Notification/Emoji/emojipicker';

import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';
import { EmojiClickData } from 'emoji-picker-react';
import CreateNotice from '@/components/Home/Notification/CreateNotice/CreateNotice';

interface EmojiItem {
    emoji: string;
    count: number;
    liked: boolean;
}

interface NotificationItem {
    id: number;
    author: string;
    date: string;
    title: string;
    content: string;
    emoji: EmojiItem[];
}

const Notification: React.FC = () => {
    const workspaceId = window.localStorage.getItem('workspaceId');
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
    const [activeNotification, setActiveNotification] = useState<number | null>(null);
    const [isCreateNoticeVisible, setCreateNoticeVisible] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null); 
    const [showAlert, setShowAlert] = useState<boolean>(false); 
    const CreateNoticeRef = useRef<HTMLDivElement>(null);

    const getNotification = async () => {
        try {
            const res = await SeugiCustomAxios.get(`/notification/${workspaceId}?page=0&size=20`);
            console.log("알람 :", workspaceId);

            const formattedNotifications = res.data.data.map((notification: NotificationItem) => ({
                ...notification,
                emoji: notification.emoji.map((emoji: EmojiItem) => ({
                    ...emoji,
                    liked: false,
                })),
            }));

            setNotifications(formattedNotifications);
        } catch (error) {
            console.error('알림 불러오기 실패:', error);
        }
    };

    useEffect(() => {
        const role = window.localStorage.getItem('Role');
        setUserRole(role);
    }, []);

    useEffect(() => {
        getNotification();
    }, []);

    const handleCorrectionClick = () => {
        if (userRole === 'STUDENT') {
            setShowAlert(true);
            return;
        }
        setCreateNoticeVisible(true);
    };

    const handleEmojiClick = async (parentKey: number, childKey: number) => {
        const notification = notifications[parentKey];
        const emoji = notification.emoji[childKey];

        const updatedNotifications = notifications.map((item, index) => {
            if (index === parentKey) {
                const updatedEmoji = item.emoji.map((emoji, idx) => {
                    if (idx === childKey) {
                        if (emoji.liked) {
                            const newCount = emoji.count - 1;
                            return {
                                ...emoji,
                                count: newCount,
                                liked: false,
                            };
                        } else {
                            return {
                                ...emoji,
                                count: emoji.count + 1,
                                liked: true,
                            };
                        }
                    }
                    return emoji;
                });

                return { ...item, emoji: updatedEmoji };
            }
            return item;
        });

        setNotifications(updatedNotifications);

        try {
            await SeugiCustomAxios.patch(`/notification/emoji`, {
                notificationId: notification.id,
                emoji: emoji.emoji,
            });
        } catch (error) {
            console.error('Failed to send emoji:', error);
        }
    };

    const handleAddEmojiClick = (notificationIndex: number) => {
        setActiveNotification(notificationIndex);
        setEmojiPickerVisible(true);
    };

    const handleEmojiSelect = async (emoji: EmojiClickData) => {
        if (activeNotification !== null) {
            const notification = notifications[activeNotification];

            const updatedNotifications = notifications.map((item, index) => {
                if (index === activeNotification) {
                    const existingEmoji = item.emoji.find(e => e.emoji === emoji.emoji);
                    if (existingEmoji) {
                        const updatedEmoji = item.emoji.map(e =>
                            e.emoji === emoji.emoji
                                ? { ...e, count: e.count + 1, liked: true }
                                : e
                        );
                        return { ...item, emoji: updatedEmoji };
                    } else {
                        const newEmoji = { emoji: emoji.emoji, count: 1, liked: true };
                        return { ...item, emoji: [...item.emoji, newEmoji] };
                    }
                }
                return item;
            });

            setNotifications(updatedNotifications);

            try {
                await SeugiCustomAxios.patch(`/notification/emoji`, {
                    notificationId: notification.id,
                    emoji: emoji.emoji,
                });
            } catch (error) {
                console.error('Failed to send new emoji:', error);
            }
        }

        setEmojiPickerVisible(false);
        setActiveNotification(null);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node | null;

            if (
                CreateNoticeRef.current &&
                !CreateNoticeRef.current.contains(target)
            ) {
                setCreateNoticeVisible(false);
            }
        };

        if (CreateNoticeRef.current) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [CreateNoticeRef]);

    return (
        <S.LeftContainer>
            {isCreateNoticeVisible && (
                <div ref={CreateNoticeRef}>
                    <CreateNotice onClose={() => setCreateNoticeVisible(false)} />
                </div>
            )}
            {showAlert && (
                <CustomAlert
                    titletext="권한이 없습니다"
                    subtext='선생님만 할 수 있는 작업입니다.'
                    buttontext="닫기"
                    onClose={() => setShowAlert(false)}
                    position="top-right" 
                />
            )}
            <S.NotificationContainer>
                <S.NotificationTitleContainer>
                    <S.NotificationLogo src={NotificationImg} />
                    <S.NotificationTitle>알림</S.NotificationTitle>
                </S.NotificationTitleContainer>
                <S.ArrowLButton onClick={handleCorrectionClick}>
                    <S.NArrowLogo src={CorrectionImg} />
                </S.ArrowLButton>
            </S.NotificationContainer>
            <S.NotificationBox>
                {notifications.length > 0 ? (
                    notifications.map((item, parentKey) => (
                        <S.NotificationWrapper key={parentKey}>
                            <S.NotificationContentAuthor>
                                {item.author} · {item.date}
                            </S.NotificationContentAuthor>
                            <S.NotificationContentTitle>
                                {item.title}
                            </S.NotificationContentTitle>
                            <S.NotificationContentDescription>
                                {item.content}
                            </S.NotificationContentDescription>
                            <S.NotificationEmojiBox>
                                <S.NotificationAddEmojiButton onClick={() => handleAddEmojiClick(parentKey)}>
                                    <S.NotificationAddEmoji src={Emoji} />
                                </S.NotificationAddEmojiButton>
                                {item.emoji.map((emoji, childKey) => (
                                    <S.NotificationEmojiWrapper
                                        onClick={() => handleEmojiClick(parentKey, childKey)}
                                        key={childKey}
                                        className={emoji.liked ? "Clicked" : ""}
                                    >
                                        <S.NotificationEmojiCount
                                            className={emoji.liked ? "Clicked" : ""}
                                        >
                                            {emoji.emoji} {emoji.count}
                                        </S.NotificationEmojiCount>
                                    </S.NotificationEmojiWrapper>
                                ))}
                            </S.NotificationEmojiBox>
                            {isEmojiPickerVisible && activeNotification === parentKey && (
                                <AddEmoji
                                    isOpened={isEmojiPickerVisible}
                                    setIsOpened={setEmojiPickerVisible}
                                    onSelect={handleEmojiSelect}
                                />
                            )}
                        </S.NotificationWrapper>
                    ))
                ) : (
                    <S.NoNotification>알림이 없습니다.</S.NoNotification>
                )}
            </S.NotificationBox>
        </S.LeftContainer>
    );
};

export default Notification;
