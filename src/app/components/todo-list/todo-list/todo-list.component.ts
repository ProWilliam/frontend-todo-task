import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../services/todo/todo.service';
import { GlobalStateService } from '../../../services/globalState/global-state.service';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  private websocket: string = environment.conectionWebSocket; 

  todos: any[] = [];

  constructor(private todoService: TodoService, private globalState: GlobalStateService) {}

  ngOnInit() {

    const token = globalThis.localStorage.getItem('token');
    
    if(token) this.globalState.connectWebSocket(this.websocket, token);

    this.globalState.todos$.subscribe(todos => {
      this.todos = todos;
    });

    this.loadTodos(); 
  }

  loadTodos() {
    this.todoService.getTodo().subscribe({
      next: (response) => {
        console.log(response);
        this.todos = response; 
      },
      error: (error) => {
        localStorage.clear();
        console.error('Error al cargar las tareas:', error);
      },
    });
  }

  checkTodo(id: string, completed: boolean) {
    this.todoService.upDateTodo(!completed, id).subscribe({
      next: (response) => {
        console.log(response);

      },
      error: (error) => {
        
        console.error('Error update Todos:', error);
      },
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      next: (response) => {
        console.log(response);
        
      },
      error: (error) => {
        console.error('Error al eliminar la tarea:', error);
      },
    });
  }
}
