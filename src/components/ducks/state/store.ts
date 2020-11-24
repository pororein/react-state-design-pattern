import { createStore, combineReducers } from 'redux';
import todoListReducer, { TodoItem } from './modules/TodoList';
import todoFilterReducer, { TodoFilterState } from './modules/TodoFilter';

export type AppState = {
  todoList: TodoItem[],
  filter: TodoFilterState
};

const store = createStore(
  combineReducers<AppState>({
    todoList: todoListReducer,
    filter: todoFilterReducer,
  })
);

export default store;