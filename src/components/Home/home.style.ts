import styled from "styled-components";

export const HomeTitle = styled.h1`
  position: relative;

  top: 64px;
  left: 32px;

  width: 100%;
  height: 100%;

  color: var(--Black, #000);

  /* Title1 */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
`;

export const HomeContainer = styled.div`
  background-color: var(--Primary-Primary050, #f8fcff);
  display: flex;
`;

export const HomeWrapper = styled.div`
  display: flex;

  position: relative;

  flex-direction: column;

  top: 84px;
  left: 32px;
`;

export const DailyScheduleBox = styled.div`
  position: relative;

  width: 864px;
  height: 146px;

  padding: 12px;

  border-radius: 12px;

  background-color: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const BookLogo = styled.img`
  position: relative;
`;

export const DailyScheduleTitle = styled.h2`
  position: relative;

  left: 8px;

  color: var(--Black, #000);

  /* Subtitle2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
`;

export const NumberTable = styled.div`
  display: flex;

  position: relative;

  top: 10px;
`;

export const Number = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  color: var(--Primary-Primary300, #7ec4fc);
  /* Body1 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */

  &.Today {
    color: var(--Primary-Primary500, #1d93f3);
  }

  width: 120px;
  height: 34px;
`;

export const ItemTable = styled.table`
  display: flex;

  position: relative;

  background-color: var(--Primary-Primary300, #7ec4fc);

  border-radius: 20px;

  top: 10px;
`;

export const Item = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 120px;
  height: 34px;

  color: var(--Primary-Primary200, #b1dbfd);

  background-color: var(--Primary-Primary500, #1d93f3);

  &.First {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  &.Last {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &.Today {
    color: white;
  }

  &.After {
    background-color: var(--Primary-Primary300, #7ec4fc);
  }
`;

export const NotificationBox = styled.div`
  position: relative;

  background-color: #fff;

  padding: 12px;

  top: 20px;

  border-radius: 12px;

  width: 422px;
  height: 658px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const NotificationLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const NotificationTitle = styled.h2`
  position: relative;

  left: 8px;

  color: var(--Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  margin-right:78%;
`;

export const NArrowLogo = styled.img`
position:relative;
`

export const ArrowLogo = styled.img`
  position: relative;

  left: 695px;
`;

export const ScheduleBox = styled.div`
  display:flex;
  flex-direction:column;

  position: absolute;

  background-color: #fff;

  padding: 12px;

  top: 20.5%;
  left:32%;

  border-radius: 12px;

  width: 422px;
  height: 270px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const CalendarLogo = styled.img`
  width: 32px;
  height: 32px;

  margin-right:8px;
`

export const ScheduleTitle = styled.span`
  color: var(--Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-right:60%;
`

export const ArrowLButton = styled.button`
  background:none;
  border:none;

  cursor: pointer;
`

export const SArrowLogo = styled.img`
  position: relative;
`

export const CatSeugiBox = styled.div`
  position: absolute;

  background-color: #fff;

  padding: 12px;

  top: 56%;
  left:32%;

  border-radius: 12px;

  width: 422px;
  height: 270px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const SeugiImg = styled.img`
  width:28px;
  height:28px;

  margin-right:8px;
`

export const CatSeugiTitle = styled.span`
  color: var(--Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  margin-right:73%;
`

export const CArrowLogo = styled.img`
  position: relative;
`

export const HomeMain = styled.div`
  margin-left:5%;
`

export const MySchoolBox = styled.div`
  position: absolute;

  background-color: #fff;

  padding: 12px;

  top: 0%;
  left:63.5%;

  border-radius: 12px;

  width: 422px;
  height: 120px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const SchoolImg = styled.img`
  width: 28px;
  height: 28px;

  margin-right:8px;
`

export const MySchooliTitle = styled.span`
  color: var(--Sub-Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  margin-right:73%;
`

export const CafeteriaBox = styled.div`
   position: absolute;

  background-color: #fff;

  padding: 12px;

  top: 17%;
  left:63.5%;

  border-radius: 12px;

  width: 422px;
  height: 265px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const CafeteriaImg = styled.img`
  width:28px;
  height:28px;

  margin-right:8px;
`

export const CafeteriaTitle = styled.p`
  color: var(--Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  margin-right:65%;
`

export const Dummy = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;

  margin-top:10px;
`

export const Dummy1 = styled.div`
  width:100%;

  display:flex;
  flex-direction:row;
  align-items:center;

  padding: 0 0 16px 0;

`

export const Dummy2 = styled.div`
  width:100%;

  display:flex;
  flex-direction:row;
  align-items:center;

  padding: 0 0 16px 0;
`

export const Dummy3 = styled.div`
  width:100%;

  display:flex;
  flex-direction:row;
  align-items:center;

  padding: 0 0 16px 0;
`

export const Dummy4 = styled.div`
  width:100%;

  display:flex;
  flex-direction:row;
  align-items:center;

  padding: 0 0 16px 0;

  top:4px;
`

export const Dummy5 = styled.div`
  width:100%;

  display:flex;
  flex-direction:row;
  align-items:center;
`

export const DummyDate = styled.span`
  display:flex;

  color: var(--Primary-Primary500, #1D93F3);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; 
  
  margin-right:4px;

  padding:0 0 0 12px;
`

export const SubTitle = styled.span`
  color: var(--Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
`

export const D_Day = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 15.6px */

  margin-left:auto;
  margin-right:14px;
  
`

export const CatSeugi = styled.div`
  width:100%;

  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 99px;
  border: 1.5px solid var(--Gradient-Primary, #1C8DF4);
  background: var(--Sub-White, #FFF);

  margin-top:16px;
`

export const CatSeugiInput = styled.input`
  width:100%;
  height:29px;
  border:none;
  &::placeholder{
        color: var(--Gray-Gray500, #AAA);

        font-family: 'Pretendard-Regular', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; 
    }

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; 

    &:focus {
        outline: none;
    }

    padding:0 0 0 4px;
`

export const SearchImg = styled.img`
  padding:0 4px 0 0;
`

export const LastQuestionBox = styled.div`
  padding: 16px 0 0 8px;
`

export const Lastweek = styled.span`
  color: var(--Sub-Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
`

export const LastQuestion = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 4px;
  background: var(--Gray-Gray100, #F4F5F9);

  width:100%;
  height:40px;
  margin-top:4px;
  margin-bottom:4px;
`

export const QuestionText = styled.span`
  color: var(--Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; 
`

export const QuestionDay = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
`