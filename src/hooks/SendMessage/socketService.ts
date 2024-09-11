import Stomp from 'stompjs';

let socket: Stomp.Client | undefined;
let isConnected = false;
const subscriptions: { [key: string]: Stomp.Subscription } = {};

export const socketService = {
    connect: () => { 
        if (socket) {
            console.warn("이미 연결된 상태입니다.");
            return;
        }
        
        socket = Stomp.client('wss://api.seugi.com/stomp/chat'); 

        socket.connect({}, (frame) => {
            console.log('소켓 연결됨');
            isConnected = true;
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
    sendMessage: (message: string, room: string) => {
        if (!socket || !isConnected) {
            console.error("소켓이 연결되지 않았습니다.");
            return;
        }

        socket.send(`/pub/chat.message`, { room }, message);
    },
    subscribeToMessages: (room: string, callback: (message: string) => void) => {
        if (!socket || !isConnected) {
            console.error("소켓이 연결되지 않았습니다.");
            return;
        }

        const topic = `/exchange/chat.exchange/room.${room}`;
        if (subscriptions[topic]) {
            console.warn(`이미 구독 중인 채팅방: ${room}`);
            return;
        }

        subscriptions[topic] = socket.subscribe(topic, (message: Stomp.Message) => {
            callback(message.body);
        });
    },
    unsubscribeFromMessages: (room: string) => {
        if (!socket || !isConnected) {
            console.error("소켓이 연결되지 않았습니다.");
            return;
        }

        const topic = `/exchange/chat.exchange/room.${room}`;
        if (subscriptions[topic]) {
            subscriptions[topic].unsubscribe();
            delete subscriptions[topic];
            console.log(`채팅방 ${room} 구독 해제됨`);
        }
    },
};