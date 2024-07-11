import Stomp from 'stompjs';

let socket: Stomp.Client | undefined;

export const socketService = {
    connect: (token: string) => { 
        socket = Stomp.client('wss://hoolc.me/stomp/chat'); 

        const headers = {
            'Authorization': `Bearer ${token}`
        };

        socket.connect(headers, function (frame) {
            console.log('소켓 연결됨');
            socket?.subscribe("/exchange/chat.exchange/room.666e9b0ee0b561622b357c3c", (message: Stomp.Message) => {
                console.log(message.body);
            })
        });
    },
    disconnect: () => {
        if (!socket) return;

        socket.disconnect(() => {
            console.log('소켓 연결 해제됨');
        });
    },
    sendMessage: (message: string) => {
        if (!socket || !socket.connected) {
            console.error("소켓이 연결되지 않았습니다.");
            return;
        }

        socket.send('/pub/chat.message', {}, JSON.stringify({"roomId": 2, "type": "MESSAGE", "message": message, "mention": [], "mentionAll": false}));
    },
    subscribeToMessages: (topic: string, callback: (message: string) => void) => {
        if (!socket || !socket.connected) {
            console.error("소켓이 연결되지 않았습니다.");
            return;
        }

        socket.subscribe(topic, (message: Stomp.Message) => {
            callback(message.body);
        });
    },

};