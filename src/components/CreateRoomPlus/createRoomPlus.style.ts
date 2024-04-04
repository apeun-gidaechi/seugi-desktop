import styled from "styled-components"; 
import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

export const CreateRoomPlusBox = styled.div`
    display: flex;
    width: 443px;
    height: 334px;
    padding: 24px;
    gap: 12px;

    border-radius: 16px;
    background: #FFF;

    flex-direction: column;
`

export const ChatRoomName = styled.div`
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */

    /* margin-top: 20px;
    margin-left: 20px;  */
    flex: 1;
    padding: 4px;
`

export const ChatRoomButton = styled.button`
    display: flex;
    height: 36px;
    padding: var(--Large, 12px);
    justify-content: center;
    align-items: center;
    gap: 10px;  

    border: none;
    color: #fff;

    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);
    margin-bottom: 12px;
    /* margin-top: 20px;
    margin-right: 20px; */
`

export const InviteMemberWrap = styled.div`
    width: 395px;
    height: 44px;
    
    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);

    display: flex;

`
export const InviteMemberFlex = styled.div`
    display: flex;
    align-items: center;
`

export const InviteMember = styled.input`
    font-family:  'Pretendard-Regular', sans-serif;

    color: var(--Gray-Gray500, #AAA);
    /* Subtitle2 */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    padding: 14px;
    margin-left: 2px;
    
    flex: 1;

    border: none;
    outline: none;
    
    height: 20px;

    &:focus{
        color: black; 
    }
`

export const PlusMemberClick = styled.div`
    padding: 4px 16px;
`

export const AvatarProfileWrap = styled.div`
    padding-right: 16px;
`

export const AvatarProfile = styled.img`
    width: 36px;
    height: 36px;
    
`

export const InviterName = styled.div`
    color: var(--Black, #000);

    /* Subtitle2 */
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    display: flex;
    align-items: center;

    flex: 1;
`

export const PlusButtonCheck = styled.button`
    border: none;
    outline: none;
    background: none;
`

