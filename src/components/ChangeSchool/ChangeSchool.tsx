import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import config from '@/constants/config/config.json';
import * as S from '@/components/ChangeSchool/ChangeSchool.style';
import Arrow from '@/assets/image/home/arrow.svg';
import Setting from '@/assets/image/home/setting_fill.svg';

interface Workspace {
    workspaceId: string;
    workspaceName: string;
    workspaceImageUrl: string;
    studentCount: number;
    teacherCount: number;
}

const Changeschool = () => {
    const [subscribedSchoolNames, setSubSchoolNames] = useState<Workspace[]>([]);
    const [pendingSchoolNames, setPendingSchoolNames] = useState<string[]>([]);
    const navigate = useNavigate();

    const goCreateSchool = () => {
        navigate('/selectschool');
    };

    // 가입 완료 된
    useEffect(() => {
        const fetchSubSchoolNames = async () => {
            try {
                const token = window.localStorage.getItem("accessToken");
                if (!token) {
                    console.error('No token found');
                    return;
                }

                const res = await axios.get<{ data: Workspace[] }>(`${config.serverurl}/workspace`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });

                console.log('Subscribed schools response:', res.data.data);
                setSubSchoolNames(res.data.data);
            } catch (error) {
                console.error('Error fetching subscribed schools:', error);
            }
        };

        fetchSubSchoolNames();
    }, []);

    // 가입 대기 중
    useEffect(() => {
        const fetchPendingSchoolNames = async () => {
            try {
                const token = window.localStorage.getItem("accessToken");
                if (!token) {
                    console.error('No token found');
                    return;
                }

                const res = await axios.get<{ data: string[] }>(`${config.serverurl}/workspace/my/wait-list`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });

                console.log('Pending schools response:', res.data.data);
                setPendingSchoolNames(res.data.data);
            } catch (error) {
                console.error('Error fetching pending schools:', error);
            }
        };

        fetchPendingSchoolNames();
    }, []);

    return (
        <S.ChangeSchoolMain>
            {subscribedSchoolNames.length === 0 ? (
                <S.NoSubscribedSchools>
                    <S.NoSubSchoolText>가입된 학교가 없습니다.</S.NoSubSchoolText>
                    <S.CreateSchool onClick={goCreateSchool}>새 학교 가입</S.CreateSchool>
                </S.NoSubscribedSchools>
            ) : (
                subscribedSchoolNames.map((school, index) => (
                    <S.Subscribed key={school.workspaceId}>
                        <S.SchoolBox>
                            <S.SchoolName>{school.workspaceName}</S.SchoolName>
                            <S.SettingButton>
                                <S.SettingImg src={Setting} />
                            </S.SettingButton>
                            <S.ArrowButton>
                                <S.ArrowImg src={Arrow} />
                            </S.ArrowButton>
                        </S.SchoolBox>
                    </S.Subscribed>
                ))
            )}
            <S.PendingSchool>
                <S.WaitingJoin>가입 대기 중</S.WaitingJoin>
                {pendingSchoolNames.length === 0 ? (
                    <S.NoPendingSchools>가입 대기중인 학교가 없습니다</S.NoPendingSchools>
                ) : (
                    pendingSchoolNames.map((schoolName, index) => (
                        <S.Subscribed key={index}>
                            <S.SchoolBox>
                                <S.SchoolName>{schoolName}</S.SchoolName>
                                <S.ArrowButton>
                                    <S.ArrowImg src={Arrow} />
                                </S.ArrowButton>
                            </S.SchoolBox>
                        </S.Subscribed>
                    ))
                )}
            </S.PendingSchool>
            {subscribedSchoolNames.length > 0 && (
                <S.CreateSchool onClick={goCreateSchool}>새 학교 가입</S.CreateSchool>
            )}
        </S.ChangeSchoolMain>
    );
};

export default Changeschool;
