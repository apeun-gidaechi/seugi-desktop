import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

interface FileUploadProps {
  hovered: boolean;
}

export const ChatRoomForm = styled.div`
  width: 272px;
  height: 72px;

  border-radius: 16px;
  background: #fff;

  display: flex;
  width: 272px;
  padding: 16px;
  gap: 8px;
`;

export const FileUpload = styled.button<FileUploadProps>`
  color: ${SeugiColor.Red500};

  ${SeugiFont.subtitle.subtitle2};

  display: flex;
  justify-content: center;

  padding: 8px;

  border: none;
  background: none;
`;
