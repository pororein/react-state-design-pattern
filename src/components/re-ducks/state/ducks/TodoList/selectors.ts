import { createSelector } from "reselect";
import { AppState } from '../../store';

const todoListSelector = (state: AppState) => state.todoList;
const filterdListSelector = (state: AppState) => state;

export const getTodoList = createSelector(
    [todoListSelector],
    state => state
);

export const getFilterdList = createSelector(
    [filterdListSelector],
    state => {
        let filterdList = state.todoList;

        if(state.filter.filterEnabled) {
            filterdList = 
                state.todoList.filter(
                    todoItem => todoItem.compleated == state.filter.filterModeDone)
        }

        return filterdList;
    }
);

