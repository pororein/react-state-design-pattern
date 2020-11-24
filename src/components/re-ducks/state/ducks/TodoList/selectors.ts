import { createSelector } from "reselect";
import { AppState } from '../../store';

const usersSelector = (state: AppState) => state.todoList;

export const getTodoList = createSelector(
    [usersSelector],
    state => state
);

