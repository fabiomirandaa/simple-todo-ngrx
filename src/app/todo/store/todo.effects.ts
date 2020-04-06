import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getTodos, TodoActionTypes, addTodo } from './todo.actions';
import { of } from 'rxjs';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffect {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap(() => {
        return this.loadAllTodos();
      })
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      switchMap((action) => {
        console.log(action);
        return this.todoService.addTodo(action.title)
        .pipe(
          mergeMap(() => {
            return this.loadAllTodos();
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}

  private loadAllTodos() {
    return this.todoService.getTodos()
    .pipe(
      map((todos) => {
        return { type: TodoActionTypes.LoadTodos, todos };
      }),
      catchError((error) => of({ type: TodoActionTypes.Error, message: error }))
    );
  }
}
