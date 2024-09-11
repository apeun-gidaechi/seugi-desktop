import React, { useState, useEffect, useRef } from "react";
import { socketService } from './socketService'; 
import axios from "axios";
import * as S from "@/components/common/sendMessage/sendMessage.style";
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
  const [receivedMessages, setReceivedMessages] = useState<
    { message: string; time: string; sender: string; type: FileType }[]
  >([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const sendMessage = (message: string, type: FileType = FileType.FILE) => {
    const time = new Date().toISOString();
    const newMessage = {
      roomId: chatRoom,
      type: type,
      message: message,
      mention: [],
      mentionAll: false,
      emoticon: "",
      time: time,
      sender: currentUser,
    };
    socketService.sendMessage(JSON.stringify(newMessage), chatRoom); // Pass roomId here
    setReceivedMessages((prevMessages) => [
      ...prevMessages,
      { message: message, time: time, sender: currentUser, type: type },
    ]);
    setMessage("");
    setHasText(false);
  };

  const handleClick = () => {
    if (message.trim() !== "") {
      sendMessage(message, FileType.FILE);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim() !== "") {
      sendMessage(message, FileType.FILE); 
    }
  };

  const uploadFile = async (file: File, type: FileType) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post(`/upload/${type}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const fileUrl = response.data;
      const time = new Date().toISOString();
  
      const newMessageForServer = {
        roomId: chatRoom,
        type: type,
        message: fileUrl,
        mention: [],
        mentionAll: false,
        emoticon: "",
      };
  
      const newMessageForState = {
        message: fileUrl,
        time: time,
        sender: currentUser,
        type: type,
      };
  
      socketService.sendMessage(JSON.stringify(newMessageForServer), chatRoom); // Pass roomId here
  
      setReceivedMessages((prevMessages) => [...prevMessages, newMessageForState]);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = FileType.FILE;
      uploadFile(file, fileType);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      const fileType = FileType.IMG;
      uploadFile(image, fileType);
    }
  };

  useEffect(() => {
    socketService.connect();

    // Correct subscription topic format
    const topic = `/exchange/chat.exchange/room.${chatRoom}`;
    socketService.subscribeToMessages(topic, (message) => {
      const newMessage = JSON.parse(message);
      setReceivedMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socketService.unsubscribeFromMessages(topic); // Ensure to unsubscribe on cleanup
    };
  }, [chatRoom]);

  return (
    <div>
      <div>
        {receivedMessages.map((msg, index) => (
          <MessageBox key={index} message={msg.message} time={msg.time} />
        ))}
      </div>

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