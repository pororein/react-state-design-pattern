import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useRecoilState } from 'recoil';
import { todoListState, TodoItem } from './TodoList';

export interface TodoCardProps {
    todoItem: TodoItem
}

export default function TodoCard(props: TodoCardProps) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const updateTitle = (id: number, title: string) => {
        let copyTodoList: TodoItem[] = JSON.parse(JSON.stringify(todoList));
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == id);
        copyTodoList[targetTodoItemIndex].title = title;
        setTodoList(copyTodoList);
    };
    const done = (id: number) => {
        let copyTodoList: TodoItem[] = JSON.parse(JSON.stringify(todoList));
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == id);
        copyTodoList[targetTodoItemIndex].compleated = true;
        setTodoList(copyTodoList);
    };
    const cancell = (id: number) => {
        let copyTodoList: TodoItem[] = JSON.parse(JSON.stringify(todoList));
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == id);
        copyTodoList[targetTodoItemIndex].compleated = false;
        setTodoList(copyTodoList);
    };
    const deleteItem = (id: number) => {
        let copyTodoList: TodoItem[] = JSON.parse(JSON.stringify(todoList));
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == id);
        copyTodoList.splice(targetTodoItemIndex, 1);
        setTodoList(copyTodoList);
    };

    return (
        <Card>
            <CardContent>
                <TextField
                    label={'Todo Title'}
                    value={props.todoItem.title}
                    onChange={(event) =>
                    {
                        updateTitle(
                            props.todoItem.id,
                            event.target.value)
                    }}
                />
                <CheckBox
                    checked={props.todoItem.compleated}
                    onChange={(event) =>
                    {
                        event.target.checked == true ?
                            done(props.todoItem.id) :
                            cancell(props.todoItem.id);
                        }}
                    />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={(event) =>
                    {
                        deleteItem(props.todoItem.id)
                    }}
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
}