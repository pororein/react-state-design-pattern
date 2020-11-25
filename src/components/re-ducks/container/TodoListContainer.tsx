import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import { todoListActions, getFilterdList } from '../state/ducks/TodoList';
import { TodoItem } from '../state/ducks/TodoList';
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
    return { todoList: getFilterdList(appState) };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
