import Stomp from 'stompjs';

const socket = Stomp.client('wss://hoolc.me');

export const socketService = {
  connect: () => {
    return new Promise<void>((resolve, reject) => {
      socket.connect({}, () => {
        console.log('소켓 연결 성공');
        resolve(); 
      }, (error) => {
        console.error('소켓 연결 중 오류 발생:', error);
        reject(error);
      });
    });
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
