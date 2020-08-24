import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.interface';

export enum TodoActionTypes {
  GetAll = '[TODO Page] Get all todos',
  LoadTodos = '[TODO API] Load todos',
  Add = '[TODO Page] Add',
  Delete = '[TODO Page] Delete',
  Error = '[TODO API] Error',
}

export const getTodos = createAction(TodoActionTypes.GetAll);

export const loadTodos = createAction(
  TodoActionTypes.LoadTodos,
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  TodoActionTypes.Add,
  props<{ title: string }>()
);

export const deleteTodo = createAction(
  TodoActionTypes.Delete,
  props<{ id: number }>()
);

export const errorTodo = createAction(
  TodoActionTypes.Error,
  props<{ message: string }>()
);
