import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import { todoListActions } from '../state/modules/TodoList';
import { TodoItem } from '../state/modules/TodoList';
import TodoList, { TodoListProps } from '../components/TodoList';

export interface TodoListActions {
    done: (id: number) => Action<{id: number}>
    cancell: (id: number) => Action<{id: number}>
    updateTitle: (id: number, title: string) => Action<{id: number, title: string}>
    delete: (id: number) => Action<{id: number}>
}

function mapDispatchToProps(dispatch: Dispatch<Action<{id: number, title?: string}>>) {
    return {
        done: (id: number) => 
            dispatch(todoListActions.done({id: id})),
        cancell: (id: number) => 
            dispatch(todoListActions.cancell({id: id})),
        updateTitle: (id: number, title: string) => 
            dispatch(todoListActions.updateTitle({id: id, title: title})),
        delete: (id: number) => 
            dispatch(todoListActions.delete({id: id})),
    };
}

function mapStateToProps(appState: AppState, props: TodoListProps) {
    let todoList = 
        appState.filter.filterEnabled?
            filter(appState.todoList, 
                appState.filter.filterModeDone):
            appState.todoList;

    return { todoList: todoList };
}

function filter(todoList: TodoItem[], filterModeDone: boolean): TodoItem[] {    
    return todoList.filter((item) => item.compleated == filterModeDone);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
