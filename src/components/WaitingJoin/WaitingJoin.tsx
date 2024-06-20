import React, { useEffect, useState } from 'react';
import * as S from '@/components/WaitingJoin/WaitingJoin.style';
import schoolimg from '@/assets/image/join-school/schoolimg.svg';
import ment from '@/assets/image/join-school/ment.svg';
import axios from 'axios';
import config from '@/config/config.json';
import { useNavigate } from 'react-router-dom';

const WaitingJoin = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    // const { verificationCode, workspaceName } = location.state || {};
    // const [approvalStatus, setApprovalStatus] = useState(null);
    // const token = window.localStorage.getItem("accessToken");

    // useEffect(() => {
    //     const checkApprovalStatus = async () => {
    //         try {
    //             const res = await axios.get(`${config.serverurl}/wait-list`, {
    //                 headers: {
    //                     Authorization: `${token}`
    //                 },
    //             });
    //             setApprovalStatus(res.data.status);
    //         } catch (error) {
    //             console.error('Error', error);
    //         } 
    //     };
    //     checkApprovalStatus();
    // }, []);

    // const handleWaitingJoin = () => {
    //     navigate('/chat');
    // }

    return (
        <S.WaitingAcceptanceFrame>
            <S.WaitingAcceptanceContainer>
                <S.SchoolInfoContainer>
                    <S.SchoolImg src={schoolimg} />
                    <S.SchoolName>학교 가입 신청 완료</S.SchoolName>
                </S.SchoolInfoContainer>
                <S.MentContainer>
                    <S.MentImg src={ment} />
                </S.MentContainer>
            </S.WaitingAcceptanceContainer>
        </S.WaitingAcceptanceFrame>
    );
}

export default WaitingJoin;
