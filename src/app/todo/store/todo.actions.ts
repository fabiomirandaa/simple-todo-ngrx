import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.interface';

// Passo 1: Definir as ações

export enum TodoActionTypes { // Aqui a gente cria um Enum com as actions
  GetAll = '[TODO Page] Get all todos',
  LoadTodos = '[TODO API] Load todos',
  Add = '[TODO Page] Add',
  Delete = '[TODO Page] Delete',
  Error = '[TODO API] Error',
}

// Aqui nessa seção, a gente define nossas actions. Há um método criador e basicamente
// passamos o type criado acima
// e em seguida o Payload com as informações que queremos passar na ação.

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
