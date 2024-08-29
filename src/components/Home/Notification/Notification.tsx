import React, { useState, useEffect } from 'react';
import * as S from '@/components/Home/Notification/Notification.style';

import Emoji from "@/assets/image/home/emoji.svg";
import NotificationImg from "@/assets/image/home/notification.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";
import AddEmoji from '@/components/Home/Notification/Emoji/emojipicker';

import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';
import { EmojiClickData } from 'emoji-picker-react';

interface NotificationItem {
    author: string;
    date: string;
    title: string;
    content: string;
    emoji: string[];
    like: boolean[];
}

const Notification: React.FC = () => {
    const workspaceId = window.localStorage.getItem('workspaceId');
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
    const [activeNotification, setActiveNotification] = useState<number | null>(null);

    const getNotification = async () => {
        try {
            const res = await SeugiCustomAxios.get(`/notification/${workspaceId}?page=0&size=20`);
            setNotifications(res.data.data);
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        }
    };

    useEffect(() => {
        getNotification();
    }, []);

    const handleEmojiClick = (parentKey: number, childKey: number) => {
        // 이모지 클릭 기능
    };

    const handleAddEmojiClick = (notificationIndex: number) => {
        setActiveNotification(notificationIndex);
        setEmojiPickerVisible(true);
    };

    const handleEmojiSelect = (emoji: EmojiClickData) => {
        if (activeNotification !== null) {
            setNotifications((prevNotifications) =>
                prevNotifications.map((item, index) => {
                    if (index === activeNotification) {
                        const updatedEmoji = [...item.emoji, emoji.emoji];
                        return { ...item, emoji: updatedEmoji };
                    }
                    return item;
                })
            );
        }
        setEmojiPickerVisible(false);
        setActiveNotification(null);
    };

    return (
        <S.LeftContainer>
            <S.NotificationContainer>
                <S.NotificationTitleContainer>
                    <S.NotificationLogo src={NotificationImg} />
                    <S.NotificationTitle>알림</S.NotificationTitle>
                </S.NotificationTitleContainer>
                <S.ArrowLButton>
                    <S.NArrowLogo src={ArrowImg} />
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
                                        className={
                                            item.like[childKey] === true ? "Clicked" : ""
                                        }
                                    >
                                        <S.NotificationEmojiCount
                                            className={
                                                item.like[childKey] === true ? "Clicked" : ""
                                            }
                                        >
                                            {emoji}
                                        </S.NotificationEmojiCount>
                                    </S.NotificationEmojiWrapper>
                                ))}
                            </S.NotificationEmojiBox>
                            {isEmojiPickerVisible && activeNotification === parentKey && (
                                <AddEmoji onSelect={handleEmojiSelect} />
                            )}
                        </S.NotificationWrapper>
                    ))
                ) : (
                    <S.NoNotification>알람이 없습니다.</S.NoNotification>
                )}
            </S.NotificationBox>
        </S.LeftContainer>
    );
}

export default Notification;
