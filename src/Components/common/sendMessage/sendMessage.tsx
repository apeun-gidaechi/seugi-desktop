import React, {useState, useRef} from "react";
import {Message} from '@/Hooks/Common/SendMessage/useChatMessages';
import * as S from "./sendMessage.style";
import MessageBox from "@/Components/Chat/MessageBox/messageBox";
import PlusMessageFile from "@/Assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/Assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/Assets/image/chat-components/sendBlueArrow.svg";
import FileIcon from "@/Assets/image/chat/fileButton/file_line.svg";
import ImageIcon from "@/Assets/image/chat/fileButton/image_line.svg";
import {ChatRoom} from "@/Components/common/ChatRoom";
import useFileUpload, {FileCompletion, FileType} from "@/Hooks/Common/SendMessage/useFileUpload";

interface SendMessageProps {
  chatRoom: ChatRoom;
  messages: Message[];
  currentUser: string;
  fileCompletion: FileCompletion;
}

const SendMessage: React.FC<SendMessageProps> = (
  {
    chatRoom,
    messages,
    currentUser,
    fileCompletion
  }: SendMessageProps
) => {

  return (
    <div>
    </div>
  );
};

export default SendMessage;