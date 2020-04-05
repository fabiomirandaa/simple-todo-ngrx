import { createReducer, on } from '@ngrx/store';
import { errorTodo, loadTodos } from './todo.actions';
import { Todo } from '../models/todo.interface';

export interface TodoState {
  todo: { todos: Todo[]; error: string };
}

export const initialState: TodoState = {
  todo: { todos: [], error: '' },
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodos, (state, action) => ({
    ...state,
    todos: action.todos,
  })),
  on(errorTodo, (state, action) => ({
    ...state,
    error: action.message,
  }))
);

export const selectTodos = (state: TodoState) => state.todo.todos;

export const selectError = (state: TodoState) => state.todo.error;
