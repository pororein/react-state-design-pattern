import { createSelector } from "reselect";
import { AppState } from '../../store';

const todoFilterSelector = (state: AppState) => state.filter;

export const getFilter = createSelector(
    [todoFilterSelector],
    state => state
);