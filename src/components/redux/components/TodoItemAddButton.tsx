import React from 'react';
import TodoFilterContainer from '../container/TodoFilterContainer';
import Button from '@material-ui/core/Button';

export interface TodoItemAddButtonProps {
    add?: () => void
}

export default function TodoItemAddButton(props: TodoItemAddButtonProps) {
    return (
        <React.Fragment>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={(event) => { props.add!() } } >
                ADD ITEM
            </Button>
        </React.Fragment>
    );
}