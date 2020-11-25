import React from 'react';
import Button from '@material-ui/core/Button';
import { todoListState, TodoItem } from './TodoList';
import { useRecoilState } from 'recoil';

export default function TodoItemAddButton() {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const add = () => {
        let nextId = todoList.length;
        let copyTodoList = todoList.slice();

        if(copyTodoList.length > 1) {
            copyTodoList.sort((item1, item2) => {
                if( item1.id < item2.id ) return -1;
                if( item1.id > item2.id ) return 1;
                return 0;
            });
            nextId = copyTodoList[copyTodoList.length - 1].id + 1;
        }

        let newTodoItem: TodoItem = {
            id: nextId,
            title: '',
            compleated: false,
        }

        copyTodoList.push(newTodoItem);
        setTodoList(copyTodoList);
    }

    return (
        <React.Fragment>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={(event) => { add() } } >
                ADD ITEM
            </Button>
        </React.Fragment>
    );
}