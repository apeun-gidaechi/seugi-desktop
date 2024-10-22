// import Cookies from "js-cookie";
// import { useState, useEffect } from "react";
// import axios from "axios";
//
// const useChatSidebar = (onSelectChatRoom: (room: string) => void) => {
//   const [searchText, setSearchText] = useState("");
//   const [chatRooms, setChatRooms] = useState<string[]>([]);
//
//   // 서버에서 구독된 채팅방 목록을 가져오는 함수
//   const fetchChatRooms = async () => {
//     try {
//       const storedWorkspaceId = Cookies.get("workspaceId") || null; // 쿠키에서 workspaceId 가져오기
//       const accessToken = Cookies.get("accessToken"); // 쿠키에서 accessToken 가져오기
//
//       if (!accessToken) {
//         console.error("Access token not found. Please log in again.");
//         return;
//       }
//
//       const response = await axios.get(`/chat/personal/search?workspace=${storedWorkspaceId}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 추가
//         },
//       });
//
//       setChatRooms(response.data.rooms); // 서버 응답에서 채팅방 목록을 가져옴
//     } catch (error) {
//       console.error("Failed to fetch chat rooms:", error);
//     }
//   };
//
//   useEffect(() => {
//     fetchChatRooms(); // 컴포넌트가 마운트될 때 채팅방 목록을 가져옴
//   }, []);
//
//   const handleSearch = async () => {
//     if (searchText.trim() !== "") {
//       const roomFound = chatRooms.includes(searchText);
//
//       if (roomFound) {
//         handleChatRoomClick(searchText);
//       } else {
//         await createRoom(searchText);
//       }
//
//       setSearchText("");
//     }
//   };
//
//   const createRoom = async (roomName: string) => {
//     try {
//       const accessToken = Cookies.get("accessToken"); // 쿠키에서 accessToken 가져오기
//
//       if (!accessToken) {
//         console.error("Access token not found. Please log in again.");
//         return;
//       }
//
//       const requestData = {
//         workspaceId: "669e339593e10f4f59f8c583", // 워크스페이스 ID
//         roomName: roomName,
//         joinUsers: [10],
//         chatRoomImg: "",
//       };
//
//       const response = await axios.post('https://api.seugi.com/chat/personal/create', requestData, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 추가
//         },
//       });
//
//       if (response.status === 200) {
//         addChatRoom(roomName);
//         handleChatRoomClick(roomName);
//       } else {
//         console.error(`Error creating room: ${response.data}`);
//       }
//     } catch (error) {
//       console.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
//     }
//   };
//
//   const addChatRoom = (roomName: string) => {
//     setChatRooms((prevRooms) => {
//       if (!prevRooms.includes(roomName)) {
//         return [...prevRooms, roomName];
//       }
//       return prevRooms;
//     });
//   };
//
//   const handleChatRoomClick = (room: string) => {
//     onSelectChatRoom(room);
//   };
//
//   return {
//     searchText,
//     setSearchText,
//     chatRooms,
//     handleSearch,
//     handleChatRoomClick,
//   };
// };
//
// export default useChatSidebar;