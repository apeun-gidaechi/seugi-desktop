import React, { useEffect, useRef, useState } from 'react'
import SchoolImg from "@/assets/image/home/school.svg";
import * as S from '@/components/Home/Schools/Schools.style';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';

import Changeschool from '@/components/ChangeSchool/ChangeSchool';

const Schools = () => {
    const [workspaceName, setWorkspaceName] = useState("");
    const [showChangeschool, setShowChangeschool] = useState(false);
    const ChangeSchoolRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ChangeSchoolRef.current && !ChangeSchoolRef.current.contains(e.target as Node)) {
                setShowChangeschool(false);
            }
        };

        if (showChangeschool) {
            document.removeEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showChangeschool]);

    const getWorkspaceName = async () => {
        const workspaceId = window.localStorage.getItem("workspaceId");

        const res = await SeugiCustomAxios.get(`/workspace/${workspaceId}`);

        setWorkspaceName(res.data.data.workspaceName);
    };

    useEffect(() => {
        getWorkspaceName();
    }, []);

    const handleOnClicked = () => {
        setShowChangeschool(!showChangeschool);
    };
    return (
        <S.UpContainer>
            {showChangeschool && (
                <div ref={ChangeSchoolRef}>
                    <Changeschool onClose={handleOnClicked} />
                </div>
            )}
            <S.SchoolTitleBox>
                <S.SchoolImg src={SchoolImg} />
                <S.MySchooliTitle>내 학교</S.MySchooliTitle>
            </S.SchoolTitleBox>
            <S.SchoolBox>
                <S.SchoolName>{workspaceName}</S.SchoolName>
                <S.ChangeSchool onClick={handleOnClicked}>전환</S.ChangeSchool>
            </S.SchoolBox>
        </S.UpContainer>
    )
}

export default Schools
