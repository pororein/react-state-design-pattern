import React from 'react';
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import { todoFilterActions } from '../state/modules/TodoFilter';
import TodoFilter, { TodoFilterProps } from '../components/TodoFilter';
import { TodoItem } from '../state/modules/TodoList';

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
    let todoList = 
        appState.filter.filterEnabled?
            filter(appState.todoList, 
                appState.filter.filterModeDone):
            appState.todoList;
    
    let todoFilterProps: TodoFilterProps = {
        filter: Object.assign({}, appState.filter)
    }
    
    return todoFilterProps;
}

function filter(todoList: TodoItem[], filterModeDone: boolean): TodoItem[] {    
    return todoList.filter((item) => item.compleated == filterModeDone);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);