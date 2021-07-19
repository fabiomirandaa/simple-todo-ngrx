import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getTodos, TodoActionTypes, addTodo, deleteTodo } from './todo.actions';
import { of } from 'rxjs';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffect {

  loadTodos$ = createEffect(() =>
      this.actions$.pipe(
          ofType(getTodos),
          switchMap(() => this.loadAllTodos())
      )
  );

  addTodo$ = createEffect(() =>
      this.actions$.pipe(
          ofType(addTodo),
          switchMap((action) => this.todoService.addTodo(action.title)
              .pipe(
                  mergeMap(() => this.loadAllTodos())
              ))
      )
  );

  deleteTodo$ = createEffect(() =>
      this.actions$.pipe(
          ofType(deleteTodo),
          switchMap((action) => this.todoService.deleteTodo(action.id)
              .pipe(
                  mergeMap(() => this.loadAllTodos())
              ))
      )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}

  private loadAllTodos() {
      return this.todoService.getTodos()
          .pipe(
              map((todos) => ({ type: TodoActionTypes.LoadTodos, todos })),
              catchError((error) => of({ type: TodoActionTypes.Error, message: error }))
          );
  }
}
