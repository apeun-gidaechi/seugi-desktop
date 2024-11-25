import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Setting.style";
import SettingImg from "@/Assets/image/adminsetting/setting_fill.svg";
import PersonImg from "@/Assets/image/adminsetting/person_fill.svg";
import { paths } from "@/Constants/paths";

const Setting = () => {
    const { pathname } = useLocation();
    // const [item, setItem] = useState<string>(pathname);
    let item: string;
    switch (pathname) {
        case paths.admingeneral:
            item = '일반';
            break;
        case paths.adminalarm:
            item = '알림 설정';
            break;
        case paths.managemember:
            item = '멤버 관리';
            break;
        case paths.invitemember:
            item = '멤버 초대';
            break;
    }

    const navigate = useNavigate();

    // 메뉴 데이터
    const menuItems = [
        {
            imgSrc: SettingImg,
            options: [
                { label: "일반", path: paths.admingeneral },
                { label: "알림 설정", path: paths.adminalarm },
            ],
        },
        {
            imgSrc: PersonImg,
            options: [
                { label: "멤버 관리", path: paths.managemember },
                { label: "멤버 초대", path: paths.invitemember },
            ],
        },
    ];

    // 클릭 핸들러
    const handleClick = (path: string) => {
        navigate(path)
    };

    return (
        <S.SettingMain>
            <S.LeftSetting></S.LeftSetting>
            <S.SettingContainer>
                {menuItems.map((menu, index) => (
                    <S.SettingBox key={index}>
                        <S.ImgBox>
                            <S.SettingImg src={menu.imgSrc} />
                        </S.ImgBox>
                        {menu.options.map((option) => (
                            <S.Box
                                key={option.label}
                                isclicked={item === option.label}
                                onClick={() => {
                                    handleClick(option.path)
                                }}
                            >
                                <S.Font>{option.label}</S.Font>
                            </S.Box>
                        ))}
                    </S.SettingBox>
                ))}
            </S.SettingContainer>
        </S.SettingMain>
    );
};

export default Setting;
