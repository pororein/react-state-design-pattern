import React from 'react';
import TodoCard from './TodoCard';
import { atom, selector, useRecoilValue } from 'recoil';
import { todoFilterEnabledState, todoFilterModeDoneState } from './TodoFilter';

export interface TodoItem {
    id: number
    title: string
    compleated: boolean
}

export const todoListState = atom({
    key: 'todoList',
    default: [] as TodoItem[]
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filterEnabled = get(todoFilterEnabledState);
        const filterModeDone = get(todoFilterModeDoneState);
        const todoList = get(todoListState);
        let filterdList = todoList;

        if(filterEnabled) {
            filterdList = todoList.filter(todoItem => todoItem.compleated == filterModeDone);
        }

        return filterdList;
    }
});

export default function TodoList() {
    const filterdList = useRecoilValue(filteredTodoListState);
    return (
        <React.Fragment>
            {filterdList.map(todoItem => {
                return <TodoCard todoItem={todoItem} />
            })}
        </React.Fragment>
    );
}