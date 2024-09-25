import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private todosSubject = new BehaviorSubject<any[]>([]);
  todos$ = this.todosSubject.asObservable();

  updateTodos(todos: any[]) {
    this.todosSubject.next(todos);
  }
}
