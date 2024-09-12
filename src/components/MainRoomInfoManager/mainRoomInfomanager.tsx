import React, { useState } from 'react';
import * as S from "@/Components/MainRoomInfoManager/mainRoomInfoManager.style";

const MainRoomInfoManager: React.FC = () => {
    const [isPressed1, setIsPressed1] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isPressed3, setIsPressed3] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    const handleClick1 = () => {
        setIsPressed1(!isPressed1);
        setAlertVisible(true);
    };

    const handleClick2 = () => {
        setIsPressed2(!isPressed2);
        setAlertVisible(true);
    };

    const handleClick3 = () => {
        setIsPressed3(!isPressed3);
        setAlertVisible(true);
    };

    const handleCloseAlert = () => {
        setAlertVisible(false);
        setIsPressed1(false);
        setIsPressed2(false);
        setIsPressed3(false);
    };

    return (
        <>
            {alertVisible && (
                <div onClick={handleCloseAlert}>
                    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
                    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
                        <p>확인</p>
                    </div>
                </div>
            )}
            <S.MainRoomInfoBox>
                <S.NotificationSet
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                    onClick={handleClick1}
                    pressed={isPressed1 || isHovered1}
                >
                    부관리자 임명
                </S.NotificationSet>
                <S.NotificationSet
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    onClick={handleClick2}
                    pressed={isPressed2 || isHovered2}
                >
                    학생 정보 수정
                </S.NotificationSet>
                <S.OutChatRoom
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                    onClick={handleClick3}
                    pressed={isPressed3 || isHovered3}
                >
                    내보내기
                </S.OutChatRoom>
            </S.MainRoomInfoBox>
        </>
    );
};

export default MainRoomInfoManager;
