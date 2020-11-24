import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import { todoListActions } from '../state/modules/TodoList';
import TodoItemAddButton from '../components/TodoItemAddButton';

export interface TodoListActions {
    add: () => Action<void>
}

function mapDispatchToProps(dispatch: Dispatch<Action<void>>) {
    return {
        add: () => 
            dispatch(todoListActions.add()),
    };
}

export default connect(null, mapDispatchToProps)(TodoItemAddButton);