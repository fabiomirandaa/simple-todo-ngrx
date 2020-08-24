import { createReducer, on, createSelector } from '@ngrx/store';
import { errorTodo, loadTodos } from './todo.actions';
import { Todo } from '../models/todo.interface';

export interface TodoState {
  todos: Todo[];
  error: string;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodos, (state, action) => ({ ...state, todos: action.todos })),
  on(errorTodo, (state, action) => ({
    ...state,
    error: action.message,
  }))
);

// SELECTORS
export const selectTodoState = (state) => state.todoState;
export const selectTodos = createSelector(selectTodoState, (state) => {
  return state.todos;
});

export const selectError = createSelector(selectTodoState, (state) => {
  return state.error;
});
