import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import config from '@/constants/config/config.json';

import * as S from '@/components/Changeshcool/Changeschool.style';

import Arrow from '@/assets/image/home/arrow.svg';
import Setting from '@/assets/image/home/setting_fill.svg';

const Changeschool = () => {
    const [subscribedSchoolNames, setSubSchoolNames] = useState<string[]>([]);
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
                const res = await axios.get(`${config.serverurl}/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setSubSchoolNames(res.data.data.workspaceName);
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
                const res = await axios.get(`${config.serverurl}/my/wait-list`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setPendingSchoolNames(res.data.data.workspaceName);
            } catch (error) {
                console.error('Error fetching pending schools:', error);
            }
        };

        fetchPendingSchoolNames();
    }, []);

    return (
        <S.CreateSchoolMain>
            {subscribedSchoolNames.map((schoolName, index) => (
                <S.Subscribed key={index}>
                    <S.SchoolBox>
                        <S.SchoolName>{schoolName}</S.SchoolName>
                        <S.SettingButton>
                            <S.SettingImg src={Setting} />
                        </S.SettingButton>
                        <S.ArrowButton>
                            <S.ArrowImg src={Arrow} />
                        </S.ArrowButton>
                    </S.SchoolBox>
                </S.Subscribed>
            ))}
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
            <S.CreateSchool onClick={goCreateSchool}> 새 학교 가입 </S.CreateSchool>
        </S.CreateSchoolMain>
    );
};

export default Changeschool;
