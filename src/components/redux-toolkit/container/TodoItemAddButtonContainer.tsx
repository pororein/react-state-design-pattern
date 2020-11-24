import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import todoListSlice from '../state/slices/TodoList';
import TodoItemAddButton from '../components/TodoItemAddButton';

export interface TodoListActions {
    add: () => Action<void>
}

function mapDispatchToProps(dispatch: Dispatch<Action<void>>) {
    return {
        add: () => 
            dispatch(todoListSlice.actions.add()),
    };
}

export default connect(null, mapDispatchToProps)(TodoItemAddButton);