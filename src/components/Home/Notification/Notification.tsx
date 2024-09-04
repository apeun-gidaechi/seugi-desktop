import React, { useState, useEffect } from 'react';
import * as S from '@/components/Home/Notification/Notification.style';

import Emoji from "@/assets/image/home/emoji.svg";
import NotificationImg from "@/assets/image/home/notification.svg";
import CorrectionImg from '@/assets/image/home/Correction.svg';
import AddEmoji from '@/components/Home/Notification/Emoji/emojipicker';

import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';
import { EmojiClickData } from 'emoji-picker-react';

import config from '@/constants/config/config.json';

interface EmojiItem {
    emoji: string;
    count: number;
    liked: boolean;  // 이모지를 사용자가 좋아했는지 여부
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
    const userId = window.localStorage.getItem('userId');  // User ID 가져오기
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
    const [activeNotification, setActiveNotification] = useState<number | null>(null);

    const getNotification = async () => {
        try {
            const res = await SeugiCustomAxios.get(`/notification/${workspaceId}?page=0&size=20`);
            console.log("알람 :", workspaceId);

            // 서버에서 받아온 데이터에서 liked 필드를 설정 (기본적으로 false)
            const formattedNotifications = res.data.data.map((notification: NotificationItem) => ({
                ...notification,
                emoji: notification.emoji.map((emoji: EmojiItem) => ({
                    ...emoji,
                    liked: false, // 처음에는 모든 이모지를 좋아하지 않은 상태로 설정
                })),
            }));

            setNotifications(formattedNotifications);
        } catch (error) {
            console.error('알림 불러오기 실패:', error);
        }
    };

    useEffect(() => {
        getNotification();
    }, []);

    const handleEmojiClick = async (parentKey: number, childKey: number) => {
        const notification = notifications[parentKey];
        const emoji = notification.emoji[childKey];

        // 이모지 클릭 처리
        const updatedNotifications = notifications.map((item, index) => {
            if (index === parentKey) {
                const updatedEmoji = item.emoji.map((emoji, idx) => {
                    if (idx === childKey) {
                        // 이모지가 이미 눌린 상태인 경우
                        if (emoji.liked) {
                            const newCount = emoji.count - 1;
                            return {
                                ...emoji,
                                count: newCount,
                                liked: false,  // 누른 상태를 취소
                            };
                        } else {
                            return {
                                ...emoji,
                                count: emoji.count + 1,
                                liked: true,  // 이모지 누른 상태로 변경
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

        // 서버에 이모지 클릭 정보 전송 (옵션)
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

    return (
        <S.LeftContainer>
            <S.NotificationContainer>
                <S.NotificationTitleContainer>
                    <S.NotificationLogo src={NotificationImg} />
                    <S.NotificationTitle>알림</S.NotificationTitle>
                </S.NotificationTitleContainer>
                <S.ArrowLButton>
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
