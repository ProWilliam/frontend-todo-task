import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environments';
import { GlobalStateService } from '../globalState/global-state.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = environment.apiUrl;
  private todo = environment.todo; 

  constructor(private http: HttpClient, private globalState: GlobalStateService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `${token}`
    });
  }

  getTodo(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl + this.todo}`, {
      headers: this.getAuthHeaders()
    }).pipe(tap(todos => this.globalState.updateTodos(todos)));
  }

  createTodo(text: string, id: number): Observable<any>{
    return this.http.post(`${this.apiUrl + this.todo}`, { text, user: { id: id } }, {
      headers: this.getAuthHeaders()
    }).pipe(tap(() => this.getTodo().subscribe()));
  }

  upDateTodo(completed: boolean, id:string): Observable<any> {
    console.log(`${this.apiUrl + this.todo + id}`);
    return this.http.put(`${this.apiUrl + this.todo + id}`, { completed }, {
      headers: this.getAuthHeaders()
    }).pipe(tap(() => this.getTodo().subscribe()));
  }

  deleteTodo(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl + this.todo + id}`, {
      headers: this.getAuthHeaders()
    }).pipe(tap(() => this.getTodo().subscribe()));
  } 
  
}
