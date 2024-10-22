import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as S from '@/Components/Home/Notification/Notification.style';
import CustomAlert from '@/Components/Alert/Alert';
import Point from '@/Assets/image/home/point.svg';
import Emoji from "@/Assets/image/home/emoji.svg";
import NoNotification from '@/Assets/image/home/NoNotification.svg';
import NotificationImg from "@/Assets/image/home/notification.svg";
import CorrectionImg from '@/Assets/image/home/Correction.svg';
import AddEmoji from '@/Components/Home/Notification/Emoji/emojipicker';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import { EmojiClickData } from 'emoji-picker-react';
import CreateNotice from '@/Components/Home/Notification/CreateNotice/CreateNotice';
import ChangeNotice from './ChangeNotice/ChangeNotice';
import { useUserContext } from '@/Contexts/userContext';

interface EmojiItem {
    emoji: string;
    userList: number[];
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

interface Props {
    notifications: NotificationItem[];
    mutateNotifications: (notifications?: NotificationItem[]) => void;
}

const Notification = ({ notifications = [], mutateNotifications }: Props) => {
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // 요일 배열
        const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const dayOfWeek = daysOfWeek[date.getDay()];

        return `${month}월 ${day}일 ${dayOfWeek}`;
    };

    const user = useUserContext();
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
    const [activeNotificationId, setActiveNotificationId] = useState<number | null>(null);
    const [isCreateNoticeVisible, setCreateNoticeVisible] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [changeNoticeId, setChangeNoticeId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(notifications.length / itemsPerPage);


    const CreateNoticeRef = useRef<HTMLDivElement>(null);
    const ChangeNoticeRef = useRef<HTMLDivElement>(null);


    // const formattedNotifications: FormattedNotificationItem[] = useMemo(() => {
    //     return notifications
    //         .toSorted((a, b) => b.id - a.id)
    //         .map((notification: NotificationItem) => {
    //             let emojiDisplay: EmojiDisplayItem[] = [];
    //             notification.emoji.forEach((emoji: EmojiItem) => {
    //                 const existEmoji = emojiDisplay.find((item) => item.emoji === emoji.emoji);
    //                 if (existEmoji) {
    //                     existEmoji.count += 1;
    //                 } else {
    //                     emojiDisplay.push({
    //                         emoji: emoji.emoji,
    //                         count: 1,
    //                         liked: false,
    //                     });
    //                 }
    //             });
    //             emojiDisplay = emojiDisplay.map((emojiItem) => {
    //                 const selectedEmoji = notification.emoji.find(emoji => emoji.emoji === emojiItem.emoji && user?.id === emoji.userId);
    //                 if (selectedEmoji) {
    //                     return {
    //                         ...emojiItem,
    //                         liked: true,
    //                     };
    //                 }
    //                 return emojiItem;
    //             });
    //             return {
    //                 ...notification,
    //                 emojiDisplay,
    //             };
    //         });
    // }, [notifications, user]);


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
                setActiveNotificationId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEmojiPickerVisible]);

    const handleAddEmojiClick = (notificationId: number) => {
        if (activeNotificationId === notificationId && isEmojiPickerVisible) {
            setEmojiPickerVisible(false);
            setActiveNotificationId(null);
        } else {
            setActiveNotificationId(notificationId);
            setEmojiPickerVisible(true);
        }
    };

    // 이모지 관련
    const handleEmojiClick = async (parentKey: number, emoji: EmojiItem) => {
        try {
            if (!user) {
                return;
            }

            const updatedNotifications = notifications.map((notification, index) => {
                if (index !== parentKey) {
                    return notification;
                }

                const isEmojiIncluded = !!notification.emoji.find(it => it.emoji === emoji.emoji);

                if (!isEmojiIncluded) {
                    return {
                        ...notification,
                        emoji: notification.emoji.concat({
                            emoji: emoji.emoji,
                            userList: [user.id],
                        }),
                    };
                } else {
                    const existingEmojiIndex = notification.emoji.findIndex(it => it.emoji === emoji.emoji);
                    const existingEmoji = notification.emoji[existingEmojiIndex];

                    if (existingEmoji.userList.includes(user.id)) {
                        existingEmoji.userList = existingEmoji.userList.filter(id => id !== user.id);

                        if (existingEmoji.userList.length === 0) {
                            return {
                                ...notification,
                                emoji: notification.emoji.filter(it => it.emoji !== emoji.emoji),
                            };
                        }
                    } else {
                        existingEmoji.userList.push(user.id);
                    }

                    return {
                        ...notification,
                        emoji: [
                            ...notification.emoji.slice(0, existingEmojiIndex),
                            existingEmoji,
                            ...notification.emoji.slice(existingEmojiIndex + 1),
                        ],
                    };
                }
            });

            await SeugiCustomAxios.patch(`/notification/emoji`, {
                notificationId: notifications[parentKey].id,
                emoji: emoji.emoji,
            });

            mutateNotifications(updatedNotifications);
        } catch (error) {
            console.error(error);
            mutateNotifications(notifications);
        }
    }

    // 이모지 관련
    const handleEmojiSelect = async (emoji: EmojiClickData) => {
        try {
            if (activeNotificationId === null) {
                return;
            }

            const notification = notifications.find(it => it.id === activeNotificationId) ?? null;
            if (notification === null) {
                return;
            }

            if (user === null) {
                return;
            }

            const updatedNotifications = notifications.map((notification) => {
                if (notification.id !== activeNotificationId) {
                    return notification;
                }

                const existingEmojiIndex = notification.emoji.findIndex(emojiItem => emojiItem.emoji === emoji.emoji);
                const existingEmoji = notification.emoji[existingEmojiIndex];

                if (existingEmoji) {
                    if (existingEmoji.userList.includes(user?.id)) {
                        existingEmoji.userList = existingEmoji.userList.filter(id => id !== user?.id);

                        if (existingEmoji.userList.length === 0) {
                            return {
                                ...notification,
                                emoji: notification.emoji.filter(it => it.emoji !== emoji.emoji),
                            };
                        }
                    } else {
                        existingEmoji.userList.push(user?.id ?? 0);
                    }

                    return {
                        ...notification,
                        emoji: [
                            ...notification.emoji.slice(0, existingEmojiIndex),
                            existingEmoji,
                            ...notification.emoji.slice(existingEmojiIndex + 1),
                        ],
                    };
                } else {
                    return {
                        ...notification,
                        emoji: notification.emoji.concat({
                            emoji: emoji.emoji,
                            userList: [user?.id ?? 0],
                        }),
                    };
                }
            });

            await SeugiCustomAxios.patch(`/notification/emoji`, {
                notificationId: notification.id,
                emoji: emoji.emoji,
            });
            mutateNotifications(updatedNotifications);
        } catch (error) {
            console.error(error);
            mutateNotifications(notifications);
        } finally {
            setEmojiPickerVisible(false);
            setActiveNotificationId(null);
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
        return notifications.slice(startIndex, startIndex + itemsPerPage);
    }, [notifications, currentPage]);

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
                                <S.NotificationAddEmojiButton onClick={() => handleAddEmojiClick(item.id)} className='AddEmojiButton'>
                                    <S.NotificationAddEmoji src={Emoji} />
                                </S.NotificationAddEmojiButton>
                                {item.emoji.map((emoji, childKey) => (
                                    <S.NotificationEmojiWrapper
                                        onClick={() => handleEmojiClick(parentKey, emoji)}
                                        key={childKey}
                                        className={emoji.userList?.includes(user?.id ?? -1) ? "Clicked" : ""}
                                    >
                                        <S.NotificationEmojiCount className={emoji.userList?.includes(user?.id ?? -1) ? "Clicked" : ""}>
                                            {emoji.emoji} {emoji.userList?.length}
                                        </S.NotificationEmojiCount>
                                    </S.NotificationEmojiWrapper>
                                ))}
                            </S.NotificationEmojiBox>
                            {isEmojiPickerVisible && activeNotificationId === item.id && (
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