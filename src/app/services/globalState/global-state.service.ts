import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConectionWebSocketService } from '../websocket/conection-web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private todosSubject = new BehaviorSubject<any[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private conectionWebSocketService: ConectionWebSocketService) {
    // Subscribe to WebSocket messages
    this.conectionWebSocketService.messages$.subscribe(message => {
      this.handleMessage(message);
    });
  }

  connectWebSocket(url: string, token: string) {
    this.conectionWebSocketService.connect(url, token);
  }

  updateTodos(todos: any[]) {
    this.todosSubject.next(todos);

    // Send the new state through the WebSocket
    this.conectionWebSocketService.send({ type: 'UPDATE_TODO', data: todos });
  }

  private handleMessage(message: any) {
    // Handle messages received from the WebSocket
    if (message?.type === 'UPDATE_TODO') {
      this.todosSubject.next(message.data); // Update the task list
    }
  }
}