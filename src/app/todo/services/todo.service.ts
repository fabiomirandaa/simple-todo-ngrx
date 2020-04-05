import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  // constructor(private http: HttpClient) {}
  constructor(){}
  getTodos() {
    return of([
      {
        id: 1,
        title: 'teste',
      },
      {
        id: 2,
        title: 'teste 2',
      },
    ]);
    // return this.http.get('/api/todos');
  }
}
