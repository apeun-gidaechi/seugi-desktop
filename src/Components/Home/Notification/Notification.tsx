import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as S from '@/Components/Home/Notification/Notification.style';
import CustomAlert from '@/Components/Alert/Alert';
import Point from '@/assets/image/home/point.svg';
import Emoji from "@/assets/image/home/emoji.svg";
import NoNotification from '@/Assets/image/home/NoNotification.svg';
import NotificationImg from "@/assets/image/home/notification.svg";
import CorrectionImg from '@/assets/image/home/Correction.svg';
import AddEmoji from '@/Components/Home/Notification/Emoji/emojipicker';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import { EmojiClickData } from 'emoji-picker-react';
import CreateNotice from '@/Components/Home/Notification/CreateNotice/CreateNotice';
import ChangeNotice from './ChangeNotice/ChangeNotice';
import { useUserContext } from '@/Contexts/userContext';

interface EmojiItem {
    emoji: string;
    userId: number;
}

interface EmojiDisplayItem {
    emoji: string;
    count: number;
    liked: boolean;
}

interface NotificationItem {
    id: number;
    userName: string;
    userId: number;
    title: string;
    content: string;
    emoji: EmojiItem[];
    lastModifiedDate: string;
    createdDate: string;
}

interface FormattedNotificationItem extends NotificationItem {
    emojiDisplay: EmojiDisplayItem[];
}

interface Props {
    notifications: NotificationItem[];
    mutateNotifications: (notifications?: NotificationItem[]) => void;
}

const Notification = ({ notifications = [], mutateNotifications}: Props) => {
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const year = String(date.getFullYear()).slice(2);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };
    const user = useUserContext();
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
    const [activeNotification, setActiveNotification] = useState<number | null>(null);
    const [isCreateNoticeVisible, setCreateNoticeVisible] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [changeNoticeId, setChangeNoticeId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1); 
    const itemsPerPage = 20;
    const totalPages = Math.ceil(notifications.length / itemsPerPage);


    const CreateNoticeRef = useRef<HTMLDivElement>(null);
    const ChangeNoticeRef = useRef<HTMLDivElement>(null);


    const formattedNotifications: FormattedNotificationItem[] = useMemo(() => {
        return notifications.map((notification: NotificationItem) => {
            let emojiDisplay: EmojiDisplayItem[] = [];
            notification.emoji.forEach((emoji: EmojiItem) => {
                const existEmoji = emojiDisplay.find((item) => item.emoji === emoji.emoji);
                if (existEmoji) {
                    existEmoji.count += 1;
                } else {
                    emojiDisplay.push({
                        emoji: emoji.emoji,
                        count: 1,
                        liked: false,
                    });
                }
            });
            emojiDisplay = emojiDisplay.map((emojiItem) => {
                const selectedEmoji = notification.emoji.find(emoji => emoji.emoji === emojiItem.emoji && user?.id === emoji.userId);
                if (selectedEmoji) {
                    return {
                        ...emojiItem,
                        liked: true,
                    };
                }
                return emojiItem;
            });
            return {
                ...notification,
                emojiDisplay,
            }
        });
    }, [notifications, user]);

    useEffect(() => {
        const role = window.localStorage.getItem('Role');
        setUserRole(role);
    }, []);

    useEffect(() => {
        if (userRole === 'STUDENT') {
            setShowAlert(true);
        }
    }, [userRole]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node | null;

            if (
                (CreateNoticeRef.current && !CreateNoticeRef.current.contains(target)) &&
                (ChangeNoticeRef.current && !ChangeNoticeRef.current.contains(target)) &&
                isEmojiPickerVisible
            ) {
                setEmojiPickerVisible(false);
                setActiveNotification(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEmojiPickerVisible]);

    const handleAddEmojiClick = (notificationIndex: number) => {
        if (activeNotification === notificationIndex && isEmojiPickerVisible) {
            setEmojiPickerVisible(false);
            setActiveNotification(null);
        } else {
            setActiveNotification(notificationIndex);
            setEmojiPickerVisible(true);
        }
    };

    const handleEmojiClick = async (parentKey: number, emoji: EmojiDisplayItem) => {
        try {
            const updatedNotifications = notifications.map((notification, index) => {
                if (index !== parentKey) {
                    return notification;
                }
                const existingEmoji = notification.emoji.find(emojiItem => emojiItem.userId === user?.id && emojiItem.emoji === emoji.emoji);
                return {
                    ...notification,
                    emoji: existingEmoji
                        ? notification.emoji.filter(emojiItem => emojiItem.userId !== user?.id || emojiItem.emoji !== emoji.emoji)
                        : notification.emoji.concat({ emoji: emoji.emoji, userId: user?.id ?? 0 }),
                }
            });
            mutateNotifications(updatedNotifications);
            await SeugiCustomAxios.patch(`/notification/emoji`, {
                notificationId: notifications[parentKey].id,
                emoji: emoji.emoji,
            });
        } catch (error) {
            console.error(error);
            mutateNotifications(notifications);
        }
    };

    const handleEmojiSelect = async (emoji: EmojiClickData) => {
        try {
            if (activeNotification !== null) {
                const notification = notifications[activeNotification];

                const updatedNotifications = notifications.map((notification, index) => {
                    if (index !== activeNotification) {
                        return notification;
                    }
                    const existingEmoji = notification.emoji.find(emojiItem => emojiItem.userId === user?.id && emojiItem.emoji === emoji.emoji);
                    return {
                        ...notification,
                        emoji: existingEmoji
                            ? notification.emoji.filter(emojiItem => emojiItem.userId !== user?.id || emojiItem.emoji !== emoji.emoji)
                            : notification.emoji.concat({ emoji: emoji.emoji, userId: user?.id ?? 0 }),
                    }
                });

                mutateNotifications(updatedNotifications);
                await SeugiCustomAxios.patch(`/notification/emoji`, {
                    notificationId: notification.id,
                    emoji: emoji.emoji,
                });
            }
        } catch (error) {
            console.error(error);
            mutateNotifications(notifications);
        } finally {
            setEmojiPickerVisible(false);
            setActiveNotification(null);
        }
    };

    const handleActionButtonClick = (notificationId: number) => {
        setChangeNoticeId(prev => (prev === notificationId ? null : notificationId));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentNotifications = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return formattedNotifications.slice(startIndex, startIndex + itemsPerPage);
    }, [formattedNotifications, currentPage]);

    return (
        <S.LeftContainer>
            {isCreateNoticeVisible && (
                <CreateNotice
                    onClose={() => setCreateNoticeVisible(false)}
                    mutateNotifications={mutateNotifications}
                />
            )}
            {showAlert && (
                <CustomAlert
                    titletext="권한이 없습니다"
                    subtext='관리자만 할 수 있는 작업입니다.'
                    buttontext="닫기"
                    onClose={() => setShowAlert(false)}
                    position="top-right"
                />
            )}
            <S.NotificationContainer>
                <S.NotificationTitleContainer>
                    <S.NotificationLogo src={NotificationImg} />
                    <S.NotificationTitle>공지</S.NotificationTitle>
                </S.NotificationTitleContainer>
                <S.ArrowLButton onClick={() => setCreateNoticeVisible(true)}>
                    <S.NArrowLogo src={CorrectionImg} />
                </S.ArrowLButton>
            </S.NotificationContainer>
            <S.NotificationBox>
                {currentNotifications.length > 0 ? (
                    currentNotifications.map((item, parentKey) => (
                        <S.NotificationWrapper key={item.id}>
                            <S.NotificationContentAuthor>
                                <S.NotificationContentAuthorSpan> {item.userName} · {formatDate(item.lastModifiedDate)} </S.NotificationContentAuthorSpan>
                                <S.NotificationActionButton onClick={() => handleActionButtonClick(item.id)} className='point'>
                                    <S.NotificationActionButtonimg src={Point} />
                                </S.NotificationActionButton>
                            </S.NotificationContentAuthor>
                            <S.NotificationContentTitle>
                                {item.title}
                            </S.NotificationContentTitle>
                            <S.NotificationContentDescription>
                                {item.content}
                            </S.NotificationContentDescription>
                            <S.NotificationEmojiBox>
                                <S.NotificationAddEmojiButton onClick={() => handleAddEmojiClick(parentKey)} className='AddEmojiButton'>
                                    <S.NotificationAddEmoji src={Emoji} />
                                </S.NotificationAddEmojiButton>
                                {item.emojiDisplay.map((emoji, childKey) => (
                                    <S.NotificationEmojiWrapper
                                        onClick={() => handleEmojiClick(parentKey, emoji)}
                                        key={childKey}
                                        className={emoji.liked ? "Clicked" : ""}
                                    >
                                        <S.NotificationEmojiCount className={emoji.liked ? "Clicked" : ""}>
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
                            {changeNoticeId === item.id && (
                                <ChangeNotice
                                    onClose={() => handleActionButtonClick(item.id)}
                                    notificationId={item.id}
                                    userId={item.userId}
                                    mutateNotifications={mutateNotifications}
                                />
                            )}
                        </S.NotificationWrapper>
                    ))
                ) : (
                    <S.NoNotificationDiv>
                        <S.NoNotificationImg src={NoNotification} />
                        <S.NoNotification>알림이 없습니다.</S.NoNotification>
                    </S.NoNotificationDiv>
                )}
            </S.NotificationBox>
            <S.PaginationContainer>
                {Array.from({ length: totalPages }, (_, index) => (
                    <S.PageButton
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        active={currentPage === index + 1}
                    >
                        {index + 1}
                    </S.PageButton>
                ))}
            </S.PaginationContainer>
        </S.LeftContainer>
    );
};

export default Notification;
