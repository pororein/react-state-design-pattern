import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../state/store';
import todoListAction from '../state/actions/TodoList';
import TodoItemAddButton from '../components/TodoItemAddButton';

export interface TodoListActions {
    add: () => Action<null>
}

function mapDispatchToProps(dispatch: Dispatch<Action<null>>) {
    return {
        add: () => 
            dispatch(todoListAction.add(null)),
    };
}

export default connect(null, mapDispatchToProps)(TodoItemAddButton);