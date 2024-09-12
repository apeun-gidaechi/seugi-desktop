import React, { useState, useEffect } from 'react';
import * as S from '@/Components/Home/NotSubscribed/UnHome.style';
import Navbar from '@/Components/Common/Navbar/Navbar';
import Changeschool from '@/Components/ChangeSchool/ChangeSchool';
import HomeBookImg from '@/assets/image/home/homebook.svg';
import NotificationImg from '@/assets/image/home/notification.svg';
import ArrowImg from '@/assets/image/home/arrow.svg';
import CalendarImg from '@/assets/image/home/calendar.svg';
import SeugiImg from '@/assets/image/onbording/Start/seugilogo.svg';
import SchoolImg from '@/assets/image/home/school.svg';
import CafeteriaImg from '@/assets/image/home/cafeteria.svg';
import RegisterSchool from '@/Components/Home/NotSubscribed/RegisterSchool/RegisterSchool';
import Session from '@/Util/TokenExpired/TokenExpired';
import { clearAccessToken, SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import { useNavigate } from 'react-router-dom';

const UnHome = () => {
    const navigate = useNavigate();
    const [showChangeschool, setShowChangeschool] = useState(false);
    const token = window.localStorage.getItem("accessToken");

    const checkWorkspaceSubscription = async () => {
        try {
            const res = await SeugiCustomAxios.get('/workspace/');
            const workspaces = res.data.data;
            window.localStorage.setItem("workspaceId", workspaces[0].workspaceId);
            if (workspaces.length > 0) {
                navigate('/home');
            }
            return null;
        } catch (error) {
            console.error('워크스페이스 확인 중 오류 발생:', error);
            return null;
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const intervalId = setInterval(async () => {
            const workspaceId = await checkWorkspaceSubscription();
            if (workspaceId) {
                clearInterval(intervalId);
                navigate(`/home`);
            }
        }, 1000);

        return () => {
            document.body.style.overflow = "auto";
            clearInterval(intervalId);
        };
    }, []);

    const handleOnClicked = () => {
        setShowChangeschool(!showChangeschool);
    };

    return (
        <S.HomeContainer>
            <Session token={token} clearAccessToken={clearAccessToken} />
            <RegisterSchool />
            <Navbar />
            <S.HomeMain>
                <S.HomeTitle>홈</S.HomeTitle>
                {showChangeschool && <Changeschool onClose={handleOnClicked} />}
                <S.ComponentsBox>
                    <S.HomeWrapper1>
                        <S.HomeWrapper1UpContainer>
                            <S.ScheduleTitleBox>
                                <S.StitleBox>
                                    <S.BookLogo src={HomeBookImg} />
                                    <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
                                </S.StitleBox>
                                <S.ArrowLButton>
                                    <S.ArrowLogo src={ArrowImg} />
                                </S.ArrowLButton>
                            </S.ScheduleTitleBox>
                            <S.SDetailBox>
                                <S.SDetail>학교를 등록하고 시간표를 확인하세요</S.SDetail>
                            </S.SDetailBox>
                        </S.HomeWrapper1UpContainer>
                        <S.HomeWrapper1DownContainer>
                            <S.LeftContainer>
                                <S.NotificationContainer>
                                    <S.NotificationLogo src={NotificationImg} />
                                    <S.NotificationTitle>알림</S.NotificationTitle>
                                    <S.ArrowLButton>
                                        <S.NArrowLogo src={ArrowImg} />
                                    </S.ArrowLButton>
                                </S.NotificationContainer>
                                <S.NDtailBox>
                                    <S.NDetail>학교를 등록하고 알림을 확인하세요</S.NDetail>
                                </S.NDtailBox>
                            </S.LeftContainer>
                            <S.RightContainer>
                                <S.RightUpContainer>
                                    <S.SScheduleTitleBox>
                                        <S.Box>
                                            <S.CalendarLogo src={CalendarImg} />
                                            <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
                                        </S.Box>
                                        <S.ArrowLButton>
                                            <S.SArrowLogo src={ArrowImg} />
                                        </S.ArrowLButton>
                                    </S.SScheduleTitleBox>
                                    <S.SSDetailBox>
                                        <S.SSDetail>학교를 등록하고 일정을 확인하세요</S.SSDetail>
                                    </S.SSDetailBox>
                                </S.RightUpContainer>
                                <S.RightDownContainer>
                                    <S.SeugiTitleContainer>
                                        <S.SeugiImg src={SeugiImg} />
                                        <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
                                    </S.SeugiTitleContainer>
                                    <S.SeugiDetailBox>
                                        <S.SeugiDetail>학교를 등록하고 캣스기와 대화해 보세요</S.SeugiDetail>
                                    </S.SeugiDetailBox>
                                </S.RightDownContainer>
                            </S.RightContainer>
                        </S.HomeWrapper1DownContainer>
                    </S.HomeWrapper1>

                    <S.HomeWrapper2>
                        <S.UpContainer>
                            <S.SchoolTitleBox>
                                <S.SchoolImg src={SchoolImg} />
                                <S.MySchooliTitle>내 학교</S.MySchooliTitle>
                                <S.ArrowLButton>
                                    <S.SArrowLogo src={ArrowImg} />
                                </S.ArrowLButton>
                            </S.SchoolTitleBox>
                            <S.SchoolBox>
                                <S.SchoolDetailBox>
                                    <S.SchoolDetail>내 학교를 등록해주세요</S.SchoolDetail>
                                </S.SchoolDetailBox>
                            </S.SchoolBox>
                        </S.UpContainer>
                        <S.DownContainer>
                            <S.CafeteriaTitleBox>
                                <S.TitleBox>
                                    <S.CafeteriaImg src={CafeteriaImg} />
                                    <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
                                </S.TitleBox>
                                <S.ArrowLButton>
                                    <S.CArrowLogo src={ArrowImg} />
                                </S.ArrowLButton>
                            </S.CafeteriaTitleBox>
                            <S.CafeteriaDiv>
                                <S.CafeteriaDetail>학교를 등록하고 급식을 확인하세요</S.CafeteriaDetail>
                            </S.CafeteriaDiv>
                        </S.DownContainer>
                    </S.HomeWrapper2>
                </S.ComponentsBox>
            </S.HomeMain>
        </S.HomeContainer>
    );
};

export default UnHome;
