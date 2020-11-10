import React from 'react';
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
    delete(id: number): void
    updateTitle(id: number, updateText: string): void
    done(id: number): void
    cancell(id: number): void
}

interface None {

}

export default class TodoList extends React.Component<None, TodoItemState> {
    constructor(props: None) {
        super(props)
        this.state = {
            todoList: []
        };
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.done = this.done.bind(this);
        this.cancell = this.cancell.bind(this);
    }
    todoItemActions: TodoItemAction = {
        delete: this.delete,
        updateTitle: this.updateTitle,
        done: this.done,
        cancell: this.cancell
    }
    add(): void {
        let nextId = this.state.todoList.length;

        let newTodoItem: TodoItem = {
            id: nextId,
            title: '',
            compleated: false,
        }

        let todoListCopy = this.state.todoList.slice();
        todoListCopy.push(newTodoItem);

        this.setState({ todoList: todoListCopy });
    }
    delete(id: number) {
        let todoListCopy = this.state.todoList.slice(id, 1);
        this.setState({ todoList: todoListCopy });
    }
    updateTitle(id: number, updateText: string) {
        let todoListCopy = this.state.todoList.slice();
        todoListCopy[id].title = updateText;
        this.setState({ todoList: todoListCopy });
    }
    done(id: number) {
        let todoListCopy = this.state.todoList.slice();
        todoListCopy[id].compleated = true;
        this.setState({ todoList: todoListCopy });
    }
    cancell(id: number) {
        let todoListCopy = this.state.todoList.slice();
        todoListCopy[id].compleated = false;
        this.setState({ todoList: todoListCopy });
    }

    render() {
        return (
            <React.Fragment>
                <Button variant="contained" color="primary" onClick={(event) => { this.add() } } >ADD ITEM</Button>
                <TodoFilter 
                    todoList={this.state.todoList} 
                    updateTitle={(id, updateText) => {this.updateTitle(id, updateText)}}
                    done={(id) => {this.done(id)}}
                    cancell={(id) => {this.cancell(id)}}
                    delete={(id) => {this.delete(id)}}
                />
            </React.Fragment>
        );
    }
}