import React from 'react';
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import { todoFilterActions, getFilter } from '../state/ducks/TodoFilter';
import TodoFilter, { TodoFilterProps } from '../components/TodoFilter';

export interface TodoFilterActions {
    changeFilter: (checked: boolean) => Action<boolean>
    changeFilterMode: (checked: boolean) => Action<boolean>
}

function mapDispatchToProps(dispatch: Dispatch<Action<boolean>>) {
    return {
        changeFilter: (checked: boolean) => 
            dispatch(todoFilterActions.filterSwitch(checked)),
        changeFilterMode: (checked: boolean) => 
            dispatch(todoFilterActions.filterModeSwitch(checked)),
    };
}

function mapStateToProps(appState: AppState) {    
    return {filter: getFilter(appState)};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);