import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {
    constructor(private http: HttpClient) {}

    getTodos() {
        return this.http.get('/api/todos');
    }

    addTodo(title: string) {
        return this.http.post('/api/todos', { title });
    }

    deleteTodo(id: number) {
        return this.http.delete(`/api/todos/${id}`);
    }
}
