import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header/header.component';
import { TodoListComponent } from '../todo-list/todo-list/todo-list.component';
import { TodoService } from '../../services/todo/todo.service';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  category: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ FormsModule, CommonModule, HeaderComponent, TodoListComponent ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  selectedCategory: string = '';
  categories: string[] = ['All', 'To do', 'Finished tasks']; 
  nextId: number = 1; 

  constructor(private todoService: TodoService) {}
  addTodo() {
    if(this.newTodoTitle != ''){
      this.todoService.createTodo(this.newTodoTitle, this.nextId).subscribe({
        next: (response) => {
          console.log(response);
          this.todos = response; 
          this.newTodoTitle = '';
        },
        error: (error) => {
          console.error('Error al cargar las tareas:', error);
        },
      });
    }else {
      alert("you don't have notes writing")
    }
  }

}
