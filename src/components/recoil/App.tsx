import React from 'react';
import TodoItemAddButton from './components/TodoItemAddButton';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import {RecoilRoot} from 'recoil';

export default function reduxNormalApp() {
    return (
        <React.Fragment>
            <RecoilRoot>
                <TodoItemAddButton />
                <TodoFilter />
                <TodoList />
            </RecoilRoot>
        </React.Fragment>
    );
}
