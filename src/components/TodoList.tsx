import React, { useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilCallback
} from 'recoil';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TodoCard from './TodoCard';
import { RecoilState } from 'recoil';
import _ from 'lodash';

export interface TodoItem {
  task: string
  compleated: boolean
}

export const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: []
});

export const todoListItemState: RecoilState<TodoItem[]> = selector({
  key: 'todoItemState',
  get: ({ get }) => {
    const todoList = get(todoListState);

    return todoList;
  },
  set: ({ set }, newValue) => set(todoListState, newValue)
});

export default function TodoList(): JSX.Element {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodoItem = () => {
    let newTodoList = _.cloneDeep(todoList);

    let todoItem = {
      task: '',
      compleated: false
    }

    newTodoList.push(todoItem);

    setTodoList(newTodoList);
  }

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={(event) => { addTodoItem() }}>Add Todo Item</Button>
      {todoList.map((item, index) => {
        return <TodoCard id={index} key={`todo-${index}`} />
      })}
    </Container>
  );
}