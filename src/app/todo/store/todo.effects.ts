import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getTodos, TodoActionTypes } from './todo.actions';
import { of } from 'rxjs';
import { switchMap, catchError, tap, map } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffect {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap(() => {
        return this.todoService.getTodos()
        .pipe(
          map((todos) => {
            return { type: TodoActionTypes.LoadTodos, todos };
          }),
          catchError((error) =>
            of({ type: TodoActionTypes.Error, message: error })
          ));
      })));

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
