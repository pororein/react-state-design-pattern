import React from 'react';
import { TodoItem, TodoItemAction } from './TodoList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export interface TodoCardProps {
    todoItem: TodoItem
    updateTitle: (id:number, updateText: string) => void
    done: (id:number) => void
    cancell: (id:number) => void
    delete: (id:number) => void
}

export default class TodoCard extends React.Component<TodoCardProps> {
    constructor(props: TodoCardProps) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <TextField
                        label={'Todo Title'}
                        value={this.props.todoItem.title}
                        onChange={(event) =>
                        {
                            this.props.updateTitle(
                                this.props.todoItem.id,
                                event.target.value)
                        }}
                    />
                    <CheckBox
                        checked={this.props.todoItem.compleated}
                        onChange={(event) =>
                        {
                            event.target.checked == true ?
                                this.props.done(this.props.todoItem.id) :
                                this.props.cancell(this.props.todoItem.id);
                        }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={(event) =>
                        {
                            this.props.delete(this.props.todoItem.id)
                        }}
                    >
                        Delete
                    </Button>
                </CardContent>
            </Card>
        );
    }
}