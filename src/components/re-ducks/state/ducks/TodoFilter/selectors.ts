import { createSelector } from "reselect";
import { AppState } from '../../store';

const usersSelector = (state: AppState) => state.filter;

export const getFilter = createSelector(
    [usersSelector],
    state => state
);