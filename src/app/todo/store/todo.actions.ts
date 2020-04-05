import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.interface';
import { Observable } from 'rxjs';

export enum TodoActionTypes {
  GetAll = '[TODO] get all todos',
  LoadTodos = '[TODO] load todos',
  Add = '[TODO] add',
  Delete = '[TODO] delete',
  Error = '[TODO] error',
}

export const getTodos = createAction(TodoActionTypes.GetAll);

export const loadTodos = createAction(
  TodoActionTypes.LoadTodos,
  props<{ todos: Observable<Todo[]> }>()
);

export const addTodo = createAction(
  TodoActionTypes.Add,
  props<{ name: string }>()
);

export const deleteTodo = createAction(
  TodoActionTypes.Delete,
  props<{ id: number }>()
);

export const errorTodo = createAction(
  TodoActionTypes.Error,
  props<{ message: string }>()
);
