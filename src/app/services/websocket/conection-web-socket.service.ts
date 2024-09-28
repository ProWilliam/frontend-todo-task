import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ConectionWebSocketService {
  private socket!: Socket;
  private messagesSubject = new BehaviorSubject<any>(null);
  public messages$ = this.messagesSubject.asObservable();

  constructor() {}

  connect(url: string, token: string) {
    // Connect to Socket.io server
    this.socket = io(url, {
      query: { token }, //Send token as query parameter
      transports: ['websocket'], // Force use of WebSocket
    });

    // Listen to the "connect" event
    this.socket.on('connect', () => {
      console.log('Conectado a socket.io');
    });

    // Listen for incoming messages and update the BehaviorSubject
    this.socket.on('message', (message: any) => {
      this.messagesSubject.next(message);
    });

    // Listen for connection errors
    this.socket.on('connect_error', (error: any) => {
      console.error('Error de conexión:', error);
    });

    // Listen when the socket is disconnected
    this.socket.on('disconnect', () => {
      console.warn('Desconectado de socket.io');
    });
  }

  // Send message to server
  send(msg: any) {
    this.socket.emit('message', msg); // Send message using 'message' event
  }

  // Close socket connection
  close() {
    this.socket.disconnect(); // Desconectar del servidor de socket.io
  }
}
