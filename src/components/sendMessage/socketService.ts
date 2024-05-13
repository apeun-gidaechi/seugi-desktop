
import Stomp from 'stompjs';

const socket = Stomp.client('wss://hoolc.me');

export const socketService = {
  connect: () => {
    return new Promise<void>((resolve, reject) => {
      socket.connect({}, () => {
        console.log('Socket connected successfully');
        resolve(); 
      }, (error) => {
        console.error('Error connecting to socket:', error);
        reject(error);
      });
    });
  },
  disconnect: () => {
    socket.disconnect(() => {
      console.log('Socket disconnected');
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