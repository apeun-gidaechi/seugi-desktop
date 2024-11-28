import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

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
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1};

    flex: 1;
    padding: 4px;
`;

export const ChatRoomButton = styled.button`
    display: flex;
    height: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: none;
    color: #fff;

    border-radius: 12px;
    background: ${SeugiColor.Primary500};
    margin-bottom: 12px;
`;

export const InviteMemberWrap = styled.div`
    width: 395px;
    height: 44px;

    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};

    display: flex;
    justify-content: center;
    align-items: center;

    ::placeholder{
        color: ${SeugiColor.Gray500};

        ${SeugiFont.subtitle.subtitle2};
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
    color: ${SeugiColor.Gray500};
    ${SeugiFont.subtitle.subtitle2};

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
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};

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