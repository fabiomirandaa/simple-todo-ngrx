import { Component, OnInit } from '@angular/core';
import { getTodos, deleteTodo } from '../../store/todo.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodos } from '../../store/todo.reducers';
import { Todo } from '../../models/todo.interface';

@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo-home.component.scss'],
})
export class TodoHomeComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
      this.store.dispatch(getTodos());
      this.todos$ = this.store.pipe(select(selectTodos));
  }

  ngOnInit(): void {}

  deleteTodo(id: number) {
      this.store.dispatch(deleteTodo({ id }));
  }
}
