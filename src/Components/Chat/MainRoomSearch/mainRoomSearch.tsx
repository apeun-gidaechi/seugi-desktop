import React, { useState } from 'react';
import * as S from "./mainRoomSearch.style";

import AvatarImg from '@/assets/image/chat-components/Avatar.svg';
import FindIcon from "@/assets/image/sidebar/Findicon.svg";

interface DataType {
    id: number;
    name: string;
    department: string;
}

const MainRoomSearch: React.FC = () => {
    const dummyData: DataType[] = [
        { id: 1, name: "노영재", department: "뚝딱" },
        { id: 2, name: "노일재", department: "뚝딱뚝딱" },
        { id: 3, name: "노이재", department: "뚝딱" },
        { id: 4, name: "노삼재", department: "뚝딱" },
        { id: 5, name: "노사재", department: "뚝딱뚝딱" },
        { id: 6, name: "제민국", department: "뚝뚝딱딱뚝" },
    ];

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResult, setSearchResult] = useState<DataType[]>([]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            executeSearch();
        }
    };

    const executeSearch = () => {
        const result = dummyData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.department.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(result);
    };

    return (
        <>
            <S.CreateRoomPlusBox>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <S.ChatRoomName>검색</S.ChatRoomName>
                </div>
                <S.InviteMemberWrap>
                    <S.InviteMember
                        type='text'
                        placeholder='이름, 소속 등을 입력해 주세요'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                    ></S.InviteMember>
                    <S.FindIconWrap>
                        <S.FindIcon src={FindIcon}></S.FindIcon>
                    </S.FindIconWrap>
                </S.InviteMemberWrap>
                {searchResult.map((item) => (
                    <S.PlusMemberClick key={item.id} style={{ display: 'flex' }}>
                        <S.AvatarProfileWrap>
                            <S.AvatarProfile src={AvatarImg}></S.AvatarProfile>
                        </S.AvatarProfileWrap>
                        <S.InviterName>{item.name}</S.InviterName>
                    </S.PlusMemberClick>
                ))}
            </S.CreateRoomPlusBox>
        </>
    );
};

export default MainRoomSearch;
