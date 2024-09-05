import React, { useState } from 'react'
import * as S from '@/components/Home/Notification/Notification.style';

import Emoji from "@/assets/image/home/emoji.svg";
import Heart from "@/assets/image/home/heart.png";
import Fire from "@/assets/image/home/fire.png";
import NotificationImg from "@/assets/image/home/notification.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";

import initialConfig from "@/constants/Home/config.json";

const Notification = () => {
    const [config, setConfig] = useState(() => {
        const savedConfig = localStorage.getItem("config");
        return savedConfig ? JSON.parse(savedConfig) : initialConfig;
    });

    const handleEmojiClick = (parentKey: number, childKey: number) => {
        setConfig((prevConfig: any) => {
            const newConfig = JSON.parse(JSON.stringify(prevConfig));

            if (prevConfig.notification[parentKey].like[childKey] === true) {
                newConfig.notification[parentKey].like[childKey] = false;
                newConfig.notification[parentKey].emoji[childKey] -= 1;
            } else {
                newConfig.notification[parentKey].like[childKey] = true;
                newConfig.notification[parentKey].emoji[childKey] += 1;
            }

            return newConfig;
        });
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
                {config.notification.map((item: any, parentKey: any) => (
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
                            <S.NotificationAddEmoji src={Emoji} />
                            {item.emoji.map((emoji: any, childKey: any) => (
                                <S.NotificationEmojiWrapper
                                    onClick={() =>
                                        handleEmojiClick(parentKey, childKey)
                                    }
                                    key={childKey}
                                    className={
                                        item.like[childKey] === true ? "Clicked" : ""
                                    }
                                >
                                    {childKey === 0 ? (
                                        <S.NotificationEmoji src={Heart} />
                                    ) : (
                                        <S.NotificationEmoji src={Fire} />
                                    )}
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
                    </S.NotificationWrapper>
                ))}
            </S.NotificationBox>
        </S.LeftContainer>
    )
}

export default Notification