import Stomp from 'stompjs';
import Cookies from "js-cookie";

let socket: Stomp.Client | undefined;
let isConnected = false;
const subscriptions: { [key: string]: Stomp.Subscription } = {};

export const socketService = {
  connect: (callback?: () => void) => {
    if (socket && isConnected) {
      if (callback) callback();  // 이미 연결된 경우 바로 콜백 실행
      return;
    }
    
    socket = Stomp.client('wss://api.seugi.com/stomp/chat');

    socket.connect({
      'Authorization': Cookies.get("accessToken")
    }, (frame) => {
      console.log('소켓 연결됨');
      isConnected = true;
      if (callback) callback();  // 연결 후 콜백 실행
    }, (error: any) => {
      console.error("소켓 연결 오류:", error);
    });
  },
  disconnect: () => {
    if (!socket) return;

    socket.disconnect(() => {
      console.log('소켓 연결 해제됨');
      isConnected = false;
    }, (error: any) => {
      console.error("소켓 연결 해제 오류:", error);
    });
  },
  sendMessage: (message: string) => {
    if (!socket || !socket.connected) {
      console.error("소켓이 연결되지 않았습니다.");
      return;
    }

    try {
      socket.send(`/pub/chat.message`, {'Authorization': Cookies.get("accessToken")}, message);
    } catch (error) {
      console.error(error);
    }
  },
  subscribeToMessages: (roomId: string, callback: (message: string) => void) => {
    if (!socket || !isConnected) {
      console.warn("소켓이 연결되지 않았습니다. 소켓을 연결 중...");
      socketService.connect();
      return;
    }

    const topic = `/exchange/chat.exchange/room.${roomId}`;
    if (subscriptions[topic]) {
      console.warn(`이미 구독 중인 채팅방: ${roomId}`);
      return;
    }

    subscriptions[topic] = socket.subscribe(topic, (message: Stomp.Message) => {
      callback(message.body);
    });
  },
  unsubscribeFromMessages: (roomId: string) => {
    const topic = `/exchange/chat.exchange/room.${roomId}`;

    if (!socket || !isConnected) {
      console.warn("소켓이 연결되지 않았습니다. 연결 중...");

      socketService.connect(() => {
        if (subscriptions[topic]) {
          subscriptions[topic].unsubscribe();
          delete subscriptions[topic];
          console.log(`채팅방 ${roomId} 구독 해제됨`);
        } else {
          console.warn(`해제할 구독이 없습니다: ${roomId}`);
        }
      });
      return;
    }

    if (subscriptions[topic]) {
      subscriptions[topic].unsubscribe();
      delete subscriptions[topic];
      console.log(`채팅방 ${roomId} 구독 해제됨`);
    } else {
      console.warn(`해제할 구독이 없습니다: ${roomId}`);
    }
  },
};