import { createStore, combineReducers } from 'redux';
import todoListReducer, { TodoItem } from './ducks/TodoList';
import todoFilterReducer, { TodoFilterState } from './ducks/TodoFilter';

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