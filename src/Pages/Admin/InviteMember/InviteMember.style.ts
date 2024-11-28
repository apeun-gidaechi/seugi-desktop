import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const AdminGeneralMain = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const SettingMain = styled.div`
    width: 78vw;
    display: flex;
    padding: 56px 16px 0px 416px;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;

    background: ${SeugiColor.White};
`


export const Right = styled.div`
    width: 180px;
    flex-shrink: 0;
    align-self: stretch;
`

export const CodeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const TitleDiv = styled.div`
    display: flex;
    padding: 16px 4px;
    align-items: flex-start;
    gap: 24px;
`

export const Title = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1};
`

export const CodeButton = styled.button`
    display: flex;
    height: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: none;
    border-radius: 12px;
    background: ${SeugiColor.Gray100};

    cursor : pointer;

    color: ${SeugiColor.Gray600};

    ${SeugiFont.body.body2};
`

export const JoinPeople = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`

export const JoinTitleDiv = styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: flex-start;
    gap: 24px;
`

export const JoinTitle = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1};
`

export const ButtonDiv = styled.div`
    display: flex;
    padding: 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const SearchDiv = styled.div`
    display: flex;
    padding: 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`


export const Option = styled.div<{ isSelected: boolean }>`
    z-index: 1;
    width: 50%;
    text-align: center;
    color: ${({ isSelected }) => (isSelected ? 'black' : 'gray')};
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s ease;
`;

export const ToggleContainer = styled.div`
    position: relative;
    width: 166px;
    height: 44px;
    background: ${SeugiColor.Gray100};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
`;

export const ToggleButton = styled.div<{ selectedOption: 'TEACHER' | 'STUDENT' }>`
    position: absolute;
    top: 2px;
    left: ${({ selectedOption }) => (selectedOption === 'TEACHER' ? '5px' : 'calc(50% + 2px)')};
    width: calc(50% - 7px);
    height: 40px;
    background: white;
    border-radius: 5px;
    transition: left 0.3s ease;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const AllowButton = styled.button`
    display: flex;
    width: 64px;
    height: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: ${SeugiColor.Primary500};

    color: ${SeugiColor.White};

    ${SeugiFont.body.body2};

    cursor: pointer;
    border: none;
`

export const CancelButton = styled.button`
    display: flex;
    width: 64px;
    height: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: ${SeugiColor.Red200};   

    color: ${SeugiColor.Red500};

    ${SeugiFont.body.body2};

    cursor: pointer;
    border: none;
`

export const MemberContent = styled.div`
    margin-top: 4px;
    font-size: 18px;
    text-align: center;
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1};
`;

export const SearchMemberDiv = styled.div`
    display: flex;
    width: 320px;
    height: 50px;
    padding: 12px;
    align-items: center;
    gap: 12px;

    border-radius: 12px;
    background: ${SeugiColor.Gray100};
`

export const MemberDiv = styled.div`
    display: flex;
    padding: 4px 0px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 12px;
`

export const DotButton = styled.button`
    border: none;
    background: none;

    cursor: pointer;
`

export const DotIcon = styled.img`
    right: 0;
`

export const MemberContentDiv = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    cursor: pointer;
`

export const ProfileImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 10px; 
`;

export const Checkbox = styled.button`
    cursor: pointer;

    border: none;
    background: none;
`

export const CheckImg = styled.img`
`