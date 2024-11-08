import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components"; 

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
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1}

    /* margin-top: 20px;
    margin-left: 20px;  */
    flex: 1;
    padding: 4px;
`

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
    /* margin-top: 20px;
    margin-right: 20px; */
`

export const InviteMemberWrap = styled.div`
    width: 395px;
    height: 44px;
    
    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};

    display: flex;
    justify-content: center;

`
export const InviteMemberFlex = styled.div`
    display: flex;
    align-items: center;
`

export const InviteMember = styled.input`
    color: ${SeugiColor.Gray500};

    ${SeugiFont.subtitle.subtitle2};

    padding: 14px;
    margin-left: 2px;
    
    width: 339px;

    border: none;
    outline: none;

    &:focus{
        color: black; 
    }
`

export const PlusMemberClick = styled.div`
    padding: 4px 16px;
`

export const AvatarProfileWrap = styled.div`
    padding-right: 16px;

    display: flex;
    justify-content: center;
`

export const AvatarProfile = styled.img`
    width: 36px;
    height: 36px;
    
`

export const InviterName = styled.div`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};

    display: flex;
    align-items: center;

    flex: 1;
`

export const PlusButtonCheck = styled.button`
    border: none;
    outline: none;
    background: none;
`

export const FindIcon = styled.img`
    width: 17.5px;
    height: 17.5px;
`

export const FindIconWrap = styled.div`
    padding: 6.5px;
`