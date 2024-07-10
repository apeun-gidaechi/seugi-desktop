import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import config from '@/constants/config/config.json';

import * as S from '@/components/Changeshcool/Changeschool.style';

import Arrow from '@/assets/image/home/arrow.svg';
import Setting from '@/assets/image/home/setting_fill.svg';


const Changeschool = () => {
    const [schoolNames, setSchoolNames] = useState<string[]>([]);
    const navigate = useNavigate();

    const goCreateSchool = () => {
        navigate('/selectschool')
    }

    useEffect(() => {
        const fetchSchoolNames = async () => {
            try {
                const token = window.localStorage.getItem("accessToken"); 
                const res = await axios.get(`${config.serverurl}/schools`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setSchoolNames(res.data.schoolNames);
            } catch (error) {
                console.error('Error fetching school names:', error);
            }
        };

        fetchSchoolNames();
    }, []);

    return (
        <S.CreateSchoolMain>
            <S.Subscribed>
                <S.SchoolBox>
                    <S.SchoolName>대구소프트웨어마이스터고...</S.SchoolName>
                    <S.SettingButton>
                        <S.SettingImg src={Setting} />
                    </S.SettingButton>
                    <S.ArrowButton >
                        <S.ArrowImg src={Arrow} />
                    </S.ArrowButton>
                </S.SchoolBox>
            </S.Subscribed>
            <S.Subscribed>
                <S.SchoolBox>
                    <S.SchoolName>한국디지털어쩌구고등학교</S.SchoolName>
                    {/* <S.SettingButton>
                        <S.SettingImg src={Setting} />
                    </S.SettingButton> */}
                    <S.ArrowButton >
                        <S.ArrowImg src={Arrow} />
                    </S.ArrowButton>
                </S.SchoolBox>
            </S.Subscribed>
            <div>
                <S.WaitingJoin>가입 대기 증</S.WaitingJoin>
                <S.SchoolBox>
                    <S.SchoolName>사대부고</S.SchoolName>
                    {/* <S.SettingButton>
                        <S.SettingImg src={Setting} />
                    </S.SettingButton> */}
                    <S.ArrowButton >
                        <S.ArrowImg src={Arrow} />
                    </S.ArrowButton>
                </S.SchoolBox>
                <div></div>
            </div>
            <S.CreateSchool onClick={goCreateSchool}> 새 학교 가입 </S.CreateSchool>
        </S.CreateSchoolMain>
    )
}

export default Changeschool;