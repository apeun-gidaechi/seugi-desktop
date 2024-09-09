import styled from "styled-components";
import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";

export const LeftContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Corner-Small, 10px);
  flex: 1 0 0;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const NoNotification = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`
export const NotificationContainer = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const NotificationTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NotificationLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const NotificationTitle = styled.h2`
  position: relative;

  left: 8px;

  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const NArrowLogo = styled.img`
  position: relative;
`;

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  max-height: 500px; 
  overflow-y: auto; 
  padding-right: 10px;
`;

export const NotificationWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const NotificationContentAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  width:26vw;
`;

export const NotificationContentAuthorSpan = styled.span`
  color:${SeugiColor.Gray600};

  ${SeugiFont.caption.caption2};
`

export const NotificationContentTitle = styled.span`
  position: relative;

  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const NotificationContentDescription = styled.span`
  position: relative;

  color: ${SeugiColor.Black};

  ${SeugiFont.body.body2};
`;

export const NotificationEmojiBox = styled.div`
  display: flex;

  flex-direction: row;
`;

export const NotificationAddEmojiButton = styled.button`
  border:none;
  background:none;

  cursor: pointer;
`

export const NotificationAddEmoji = styled.img`
  position: relative;

  width: 30px;
  height: 30px;

  padding: 4px;


`;

export const NotificationEmojiWrapper = styled.div`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  margin-right: 4px;

  cursor: pointer;

  &.Clicked {
    border-radius: 8px;
    border: 1px solid ${SeugiColor.Primary300};
    background: ${SeugiColor.Primary100};
  }

  transition: background 0.25s;

  border-radius: 8px;
  border: 1px solid ${SeugiColor.Gray200};
  background: ${SeugiColor.Gray100};

  width: 51px;
  height: 29px;

  position: relative;
`;

export const NotificationEmoji = styled.img`
  position: relative;

  width: 15px;
  height: 16px;
`;

export const NotificationEmojiCount = styled.span`
  margin: 3px;

  color: ${SeugiColor.Gray600};
  ${SeugiFont.subtitle.subtitle2};
`;

export const Number = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex: 1;

  color: ${SeugiColor.Primary300};

  ${SeugiFont.body.body1};

  &.Today {
    color: ${SeugiColor.Primary500};
  }
  height: 1.7vh;
`;

export const Item = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex: 1;

  padding: 8px 0;

  color: ${SeugiColor.Primary200};

  background-color: ${SeugiColor.Primary500};

  &.First {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  &.Last {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &.Today {
    color: ${SeugiColor.White};
  }

  &.After {
    background-color: transparent;
    color: ${SeugiColor.Primary300};
  }
`;

export const NotificationActionButton = styled.button`
    cursor: pointer;

    background:none;
    border:none;
`;

export const NotificationActionButtonimg = styled.img`
`

export const EditedLabel = styled.span`
    color : ${SeugiColor.Gray500};
    ${SeugiFont.caption.caption1};
`