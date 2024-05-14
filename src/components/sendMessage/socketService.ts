import Stomp from 'stompjs';

const socket = Stomp.client('wss://hoolc.me/stomp/chat'); 

export const socketService = {
    connect: (token: string) => { 
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        socket.connect(headers, function (frame) {
            socket.subscribe("/exchange/chat.exchange/room.2", function (message) {
                console.log(message.body);
            }, headers); 
        })
    },
    disconnect: () => {
        socket.disconnect(() => {
            console.log('소켓 연결 해제됨');
        });
    },
    sendMessage: (message: string) => {
        socket.send('/app/chat', {}, message);
    },
    subscribeToMessages: (callback: (message: string) => void) => {
        socket.subscribe('/topic/messages', (message: Stomp.Message) => {
            callback(message.body);
        });
    }
};
