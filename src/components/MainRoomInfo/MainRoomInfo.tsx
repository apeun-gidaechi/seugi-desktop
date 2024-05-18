// MainRoomInfo.tsx 파일

import React, { useState } from 'react';
import * as S from '@/components/MainRoomInfo/MainRoomInfo.style';
import ToggleButton from "@/components/button/Toggle/toggle";

const MainRoomInfo = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <S.MainRoomInfoBox>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <S.NotificationSet>알람 설정</S.NotificationSet>
                <ToggleButton />
            </div>
            <S.OutChatRoom
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                hovered={isHovered}
            >
                채팅방 나가기
            </S.OutChatRoom>
        </S.MainRoomInfoBox>
    );
};

export default MainRoomInfo;
