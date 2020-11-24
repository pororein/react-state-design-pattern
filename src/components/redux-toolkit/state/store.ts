import { createStore, combineReducers } from 'redux';
import todoListSlice, { TodoItem } from './slices/TodoList';
import todoFilterSlice, { TodoFilterState } from './slices/TodoFilter';

export type AppState = {
  todoList: TodoItem[],
  filter: TodoFilterState
};

const store = createStore(
  combineReducers<AppState>({
    todoList: todoListSlice.reducer,
    filter: todoFilterSlice.reducer,
  })
);

export default store;