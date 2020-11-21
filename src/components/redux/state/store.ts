import { createStore, combineReducers } from 'redux';
import todoListReducer, { TodoItem } from './reducers/TodoList';
import todoFilterReducer, { TodoFilterState } from './reducers/TodoFilter';

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