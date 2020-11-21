import { Provider as ReduxProvider } from 'react-redux';
import React from 'react';
import TodoItemAddButtonContainer from './container/TodoItemAddButtonContainer';
import TodoFilterContainer from './container/TodoFilterContainer';
import TodoListContainer from './container/TodoListContainer';
import store from './state/store';

export default function reduxNormalApp() {
    return (
        <React.Fragment>
            <ReduxProvider store={store}>
                <TodoItemAddButtonContainer />
                <TodoFilterContainer />
                <TodoListContainer />
            </ReduxProvider>
        </React.Fragment>
    );
}
