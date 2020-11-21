import React, {useState} from 'react';
import TodoFilter, { TodoFilterProps } from './TodoFilter';
import Button from '@material-ui/core/Button';

export interface TodoItem {
    id: number
    title: string
    compleated: boolean
}

export interface TodoItemState {
    todoList: TodoItem[]
}

export interface TodoItemAction {
    deleteItem(id: number): void
    updateTitle(id: number, updateText: string): void
    done(id: number): void
    cancell(id: number): void
}

interface None {

}

export default function TodoList() {
    let initailTodoList: TodoItem[] = [];
    const [todoList, setTodoList]: [
        TodoItem[],
        React.Dispatch<React.SetStateAction<TodoItem[]>>
    ] = useState(initailTodoList);
    const add = (): void => {
        let nextId = todoList.length;
        let todoListCopy = todoList.slice();
        if(todoListCopy.length > 1) {
            todoListCopy.sort((item1, item2) => {
                if( item1.id < item2.id ) return -1;
                if( item1.id > item2.id ) return 1;
                return 0;
            });
            nextId = todoListCopy[todoListCopy.length - 1].id + 1;
        }
        let newTodoItem: TodoItem = {
            id: nextId,
            title: '',
            compleated: false,
        }

        todoListCopy.push(newTodoItem);

        setTodoList(todoListCopy);
    };

    const deleteItem = (id: number): void => {
        let todoListCopy = todoList.slice();
        todoListCopy.map((item, index) => {
            if(item.id == id) {
                todoListCopy.splice(index, 1);
                return;
            }
        });
        setTodoList(todoListCopy);
    };

    const updateTitle = (id: number, updateText: string): void => {
        let todoListCopy = todoList.slice();
        todoListCopy.map((item, index) => {
            if(item.id == id) {
                item.title = updateText;
                return;
            }
        });
        setTodoList(todoListCopy);
    };

    const done = (id: number): void => {
        let todoListCopy = todoList.slice();
        todoListCopy.map((item, index) => {
            if(item.id == id) {
                item.compleated = true;
                return;
            }
        });
        setTodoList(todoListCopy);
    }
    
    const cancell = (id: number): void => {
        let todoListCopy = todoList.slice();
        todoListCopy.map((item, index) => {
            if(item.id == id) {
                item.compleated = false;
                return;
            }
        });
        setTodoList(todoListCopy);
    }

    return (
        <React.Fragment>
            <Button variant="contained" color="primary" onClick={(event) => { add() } } >ADD ITEM</Button>
            <TodoFilter 
                todoList={todoList} 
                updateTitle={(id, updateText) => {updateTitle(id, updateText)}}
                done={(id) => {done(id)}}
                cancell={(id) => {cancell(id)}}
                delete={(id) => {deleteItem(id)}}
            />
        </React.Fragment>
    );
}