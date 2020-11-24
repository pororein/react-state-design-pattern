import React from 'react';
import { TodoItem } from '../state/slices/TodoList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


export interface TodoCardProps {
    todoItem: TodoItem
    done?: (id: number) => void
    cancell?: (id: number) => void
    updateTitle?: (id: number, title: string) => void
    delete?: (id: number) => void
}

export default function TodoCard(props: TodoCardProps) {
    return (
        <Card>
            <CardContent>
                <TextField
                    label={'Todo Title'}
                    value={props.todoItem.title}
                    onChange={(event) =>
                    {
                        props.updateTitle!(
                            props.todoItem.id,
                            event.target.value)
                    }}
                />
                <CheckBox
                    checked={props.todoItem.compleated}
                    onChange={(event) =>
                    {
                        event.target.checked == true ?
                            props.done!(props.todoItem.id) :
                            props.cancell!(props.todoItem.id);
                        }}
                    />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={(event) =>
                    {
                        props.delete!(props.todoItem.id)
                    }}
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
}