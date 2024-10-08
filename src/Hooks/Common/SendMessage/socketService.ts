import Stomp from 'stompjs';

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
    
        socket.connect({}, (frame) => {
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
    sendMessage: (message: string, room: string) => {
        if (!socket || !socket.connected) {
            console.error("소켓이 연결되지 않았습니다.");
            return;
        }
    
        socket.send(`/pub/chat.message`, { room }, message);
    },
    subscribeToMessages: (room: string, callback: (message: string) => void) => {
        if (!socket || !isConnected) {
            console.warn("소켓이 연결되지 않았습니다. 소켓을 연결 중...");
            socketService.connect();  
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
        const topic = `/exchange/chat.exchange/room.${room}`;
        
        if (!socket || !isConnected) {
            console.warn("소켓이 연결되지 않았습니다. 연결 중...");
            
            socketService.connect(() => {
                if (subscriptions[topic]) {
                    subscriptions[topic].unsubscribe();
                    delete subscriptions[topic];
                    console.log(`채팅방 ${room} 구독 해제됨`);
                } else {
                    console.warn(`해제할 구독이 없습니다: ${room}`);
                }
            });
            return;
        }
    
        if (subscriptions[topic]) {
            subscriptions[topic].unsubscribe();
            delete subscriptions[topic];
            console.log(`채팅방 ${room} 구독 해제됨`);
        } else {
            console.warn(`해제할 구독이 없습니다: ${room}`);
        }
    },
};