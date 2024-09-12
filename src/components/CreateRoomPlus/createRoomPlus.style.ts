import styled from "styled-components";

export const CreateRoomPlusBox = styled.div`
    display: flex;
    width: 440px;
    height: 406px;
    padding: 24px;
    gap: 12px;

    border-radius: 16px;
    background: #FFF;

    flex-direction: column;
    position: absolute;
    z-index: 100;
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);

    margin-top: 120px;
`;

export const ChatRoomName = styled.div`
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */

    flex: 1;
    padding: 4px;
`;

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
`;

export const InviteMemberWrap = styled.div`
    width: 395px;
    height: 44px;

    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);

    display: flex;
    justify-content: center;
    align-items: center;

    ::placeholder{
        color: var(--Gray-Gray500, #AAA);

        /* Subtitle2 */
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 20.8px */
    }
`;

export const SearchIconImg = styled.img`
    width: 28px;
    height: auto;

    margin: 12px;
`

export const InviteMemberFlex = styled.div`
    display: flex;
    align-items: center;
`;

export const InviteMember = styled.input`
    font-family: 'Pretendard-Regular', sans-serif;

    color: var(--Gray-Gray500, #AAA);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    /* padding: 14px; */
     /* margin-left: 2px;*/
    padding: 12px;

    flex: 1;

    border: none;
    outline: none;

    height: 20px;

    &:focus {
        color: black;
    }
`;

export const ScrollableMemberList = styled.div`
    flex: 1;
    overflow-y: auto;
`;

export const PlusMemberClick = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0;
    cursor: pointer;
`;

export const AvatarProfileWrap = styled.div`
    padding-right: 16px;
`;

export const AvatarProfile = styled.img`
    width: 36px;
    height: 36px;
`;

export const InviterName = styled.div`
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    display: flex;
    align-items: center;

    flex: 1;
`;

export const PlusButtonCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;