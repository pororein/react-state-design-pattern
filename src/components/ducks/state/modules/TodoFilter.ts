import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';

export interface TodoFilterState {
    filterEnabled: boolean
    filterModeDone: boolean
}

const actionCreator = actionCreatorFactory();

export const todoFilterActions = {
    filterSwitch: actionCreator<boolean>('TODO_FILTER_SWITCH'),
    filterModeSwitch: actionCreator<boolean>('TODO_FILTER_MODE_SWITCH'),
}

const initialState: TodoFilterState  = {
    filterEnabled: false,
    filterModeDone: false,
}

const todoFilterReducer = reducerWithInitialState(initialState)
    .case(todoFilterActions.filterSwitch, (state, payload) => {
        return Object.assign({}, state, { filterEnabled: payload });
    })
    .case(todoFilterActions.filterModeSwitch, (state, payload) => {
        return Object.assign({}, state, { filterModeDone: payload });
    })

export default todoFilterReducer;