import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from './actions';

export interface TodoFilterState {
    filterEnabled: boolean
    filterModeDone: boolean
}

const initialState: TodoFilterState  = {
    filterEnabled: false,
    filterModeDone: false,
}

const todoFilterReducer = reducerWithInitialState(initialState)
    .case(actions.filterSwitch, (state, payload) => {
        return Object.assign({}, state, { filterEnabled: payload });
    })
    .case(actions.filterModeSwitch, (state, payload) => {
        return Object.assign({}, state, { filterModeDone: payload });
    })

export default todoFilterReducer;