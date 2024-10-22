import React, {useEffect, useRef, useState} from 'react';

import * as S from './index.style';

import useChatMessages, {MessageType} from '@/Hooks/Common/SendMessage/useChatMessages';
import {ChatRoom} from "@/Components/common/ChatRoom";
import MessageBox from "@/Components/Chat/MessageBox/messageBox";
import FileIcon from "@/Assets/image/chat/fileButton/file_line.svg";
import ImageIcon from "@/Assets/image/chat/fileButton/image_line.svg";
import PlusMessageFile from "@/Assets/image/chat-components/MessageFile.svg";
import SendArrowBlue from "@/Assets/image/chat-components/sendBlueArrow.svg";
import SendArrow from "@/Assets/image/chat-components/SendArrow.svg";

interface SelectedChatRoomProps {
  room: ChatRoom;
  currentUser: string;
}

const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({room, currentUser}) => {
  const {
    receivedMessages,
    sendMessage
  } = useChatMessages(room, currentUser);

  // 현재 날짜를 원하는 형식으로 포맷팅하는 함수
  // const formatDate = (date: Date) => {
  //   const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'};
  //   return date.toLocaleDateString('ko-KR', options);
  // };
  //
  // // 현재 날짜를 가져오기
  // const currentDate = formatDate(new Date());

  const [message, setMessage] = useState("");
  const [hasText, setHasText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const inChatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    inChatContainerRef.current?.scrollTo(0, inChatContainerRef.current.scrollHeight);
  }, [receivedMessages]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const handleClick = () => {
    if (message.trim() === "") {
      return;
    }
    sendMessage(message, 'MESSAGE');
    setMessage("");
    setHasText(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (message.trim() === "") {
      return;
    }
    if (event.key === "Enter") {
      sendMessage(message, 'MESSAGE');
      setMessage("");
      setHasText(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // sendMessage(file, 'FILE');
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      // uploadFile(image, FileType.IMG);
    }
  };

  return (
    <S.ChatContainer>
      <S.InChatContainer ref={inChatContainerRef}>
        {receivedMessages.map((message, index) => (
          <MessageBox key={index} message={message}/>
        ))}
      </S.InChatContainer>

      <S.SendMessageWrap>
        <S.PlustFileButton onClick={() => setShowDropdown(!showDropdown)}>
          {showDropdown && (
            <S.DropdownMenu>
              <S.DropdownItem onClick={() => fileInputRef.current?.click()}>
                <S.UploadImg src={FileIcon} alt="File upload"/>
                파일 업로드
              </S.DropdownItem>
              <S.DropdownItem onClick={() => imageInputRef.current?.click()}>
                <S.UploadImg src={ImageIcon} alt="Image upload"/>
                이미지 업로드
              </S.DropdownItem>
            </S.DropdownMenu>
          )}
          <S.PlusMessageFile src={PlusMessageFile}/>
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
            <S.SendArrow src={SendArrowBlue}/>
          ) : (
            <S.SendArrow src={SendArrow}/>
          )}
        </S.SendArrowButton>
      </S.SendMessageWrap>

      <input
        type="file"
        ref={fileInputRef}
        style={{display: "none"}}
        onChange={handleFileUpload}
      />

      <input
        type="file"
        ref={imageInputRef}
        accept="image/*"
        style={{display: "none"}}
        onChange={handleImageUpload}
      />
    </S.ChatContainer>
  );
};

export default SelectedChatRoom;