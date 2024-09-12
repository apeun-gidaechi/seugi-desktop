import React, { useState, useRef } from "react";
import useChatMessages from '@/hooks/SendMessage/useChatMessages';
import useFileUpload from '@/hooks/SendMessage/useFileUpload';
import * as S from "@/components/Common/SendMessage/sendMessage.style";
import MessageBox from "@/components/MessageBox/messageBox";
import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/sendBlueArrow.svg";
import FileIcon from "@/assets/image/chat/fileButton/file_line.svg";
import ImageIcon from "@/assets/image/chat/fileButton/image_line.svg";

enum FileType {
  IMG = "IMG",
  FILE = "FILE",
}

interface SendMessageProps {
  chatRoom: string;
  currentUser: string;
}

const SendMessage: React.FC<SendMessageProps> = ({ chatRoom, currentUser }) => {
  const [message, setMessage] = useState("");
  const [hasText, setHasText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const { receivedMessages, sendMessage } = useChatMessages(chatRoom, currentUser);
  const { uploadFile } = useFileUpload(chatRoom, currentUser, sendMessage);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const handleClick = () => {
    if (message.trim() !== "") {
      sendMessage(message, FileType.FILE);
      setMessage("");
      setHasText(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim() !== "") {
      sendMessage(message, FileType.FILE);
      setMessage("");
      setHasText(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadFile(file, FileType.FILE);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      uploadFile(image, FileType.IMG);
    }
  };

  return (
    <div>
      <S.MessageBoxInBox>
        <S.MessageWrap>
          {receivedMessages.map((msg, index) => (
            <MessageBox key={index} message={msg.message} time={msg.time} />
          ))}
        </S.MessageWrap>
      </S.MessageBoxInBox>

      <S.Allwrap>
        {showDropdown && (
          <S.DropdownMenu>
            <S.DropdownItem onClick={() => fileInputRef.current?.click()}>
              <S.UploadImg src={FileIcon} alt="File upload" />
              파일 업로드
            </S.DropdownItem>
            <S.DropdownItem onClick={() => imageInputRef.current?.click()}>
              <S.UploadImg src={ImageIcon} alt="Image upload" />
              이미지 업로드
            </S.DropdownItem>
          </S.DropdownMenu>
        )}

        <S.SendMessageWrap>
          <S.PlustFileButton onClick={() => setShowDropdown(!showDropdown)}>
            <S.PlusMessageFile src={PlusMessageFile} />
          </S.PlustFileButton>

          <S.SendMessageInput
            type="text"
            placeholder="메세지 보내기"
            value={message}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />

          <S.SendArrowButton onClick={handleClick} disabled={!hasText}>
            {hasText ? (
              <S.SendArrow src={SendArrowBlue} />
            ) : (
              <S.SendArrow src={SendArrow} />
            )}
          </S.SendArrowButton>
        </S.SendMessageWrap>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />

        <input
          type="file"
          ref={imageInputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </S.Allwrap>
    </div>
  );
};

export default SendMessage;