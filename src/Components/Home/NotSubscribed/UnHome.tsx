import React from 'react';
import * as S from '@/Components/Home/NotSubscribed/UnHome.style';
import Navbar from '@/Components/common/Navbar/Navbar';
import Changeschool from '@/Components/Home/ChangeSchool/ChangeSchool';
import HomeBookImg from '@/Assets/image/home/homebook.svg';
import NotificationImg from '@/Assets/image/home/notification.svg';
import ArrowImg from '@/Assets/image/home/arrow.svg';
import CalendarImg from '@/Assets/image/home/calendar.svg';
import SeugiImg from '@/Assets/image/onbording/Start/seugilogo.svg';
import SchoolImg from '@/Assets/image/home/school.svg';
import CafeteriaImg from '@/Assets/image/home/cafeteria.svg';
import RegisterSchool from '@/Components/Home/NotSubscribed/RegisterSchool/RegisterSchool';
import Session from '@/Util/TokenExpired/TokenExpired';
import { clearAccessToken } from '@/Api/SeugiCutomAxios';

import useUnhome from '@/Hooks/HomeHook/UnHome/index';

const UnHome = () => {
    const { ...unHome } = useUnhome();
    
    return (
        <S.HomeContainer>
            <Session token={unHome.token} clearAccessToken={clearAccessToken} />
            <RegisterSchool />
            <Navbar />
            <S.HomeMain>
                <S.HomeTitle>홈</S.HomeTitle>
                {unHome.showChangeschool && <Changeschool onClose={unHome.handleOnClicked} />}
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
