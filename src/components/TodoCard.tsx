import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { todoListItemState, TodoItem } from './TodoList';

export interface TodoCardProps {
  id: number
}

export default function TodoCard(props: TodoCardProps): JSX.Element {
  const id = props.id;

  const [todoList, setTodoList] = useRecoilState(todoListItemState);
  const todoItem: TodoItem = todoList[id];
  const changeTask = (task: string) => {
    let newTodoList = _.cloneDeep(todoList);
    newTodoList[id].task = task;
    setTodoList(newTodoList);
  };
  const changeCompleated = (compleated: boolean) => {
    let newTodoList = _.cloneDeep(todoList);
    newTodoList[id].compleated = compleated;
    setTodoList(newTodoList);
  };
  const deleteItem = () => {
    let newTodoList = _.cloneDeep(todoList);
    newTodoList.splice(id, 1);
    setTodoList(newTodoList);
  };

  return (
    <Card>
      <CardContent>
        <TextField value={todoItem.task} onChange={(event) => { changeTask(event.target.value) }}/>
        <CheckBox value={todoItem.compleated} onChange={(event, checked) => { changeCompleated(checked) }}/>
        <Button variant="contained" color="secondary" onClick={(event) => { deleteItem() }} > delete </Button>
      </CardContent>
    </Card>
  );
}