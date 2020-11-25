import React from 'react';
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import todoFilterAction from '../state/actions/TodoFilter';
import TodoFilter, { TodoFilterProps } from '../components/TodoFilter';

export interface TodoFilterActions {
    changeFilter: (checked: boolean) => Action<boolean>
    changeFilterMode: (checked: boolean) => Action<boolean>
}

function mapDispatchToProps(dispatch: Dispatch<Action<boolean>>) {
    return {
        changeFilter: (checked: boolean) => 
            dispatch(todoFilterAction.filterSwitch(checked)),
        changeFilterMode: (checked: boolean) => 
            dispatch(todoFilterAction.filterModeSwitch(checked)),
    };
}

function mapStateToProps(appState: AppState) {    
    let todoFilterProps: TodoFilterProps = {
        filter: Object.assign({}, appState.filter)
    }
    
    return todoFilterProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);