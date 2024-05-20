import React, { useState } from 'react';
import * as S from "./memberManagement";

const MemberManagement = () => {
    const [isPressed1, setIsPressed1] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isPressed3, setIsPressed3] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    return (
        <>
            <S.MainRoomInfoBox>
                <S.NotificationSet
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                    onClick={() => setIsPressed1(!isPressed1)}
                    pressed={isPressed1 || isHovered1}
                >
                    부관리자 임명
                </S.NotificationSet>
                <S.NotificationSet
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    onClick={() => setIsPressed2(!isPressed2)}
                    pressed={isPressed2 || isHovered2}
                >
                    학생 정보 수정
                </S.NotificationSet>
                <S.OutChatRoom
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                    onClick={() => setIsPressed3(!isPressed3)}
                    pressed={isPressed3 || isHovered3}
                >
                    내보내기
                </S.OutChatRoom>
            </S.MainRoomInfoBox>
        </>
    );
};

export default MemberManagement;
