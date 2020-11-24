import React from 'react';
import { TodoItem } from '../state/modules/TodoList';
import TodoCard from '../components/TodoCard';

export interface TodoListProps {
    todoList?: TodoItem[]
    done?: (id: number) => void
    cancell?: (id: number) => void
    updateTitle?: (id: number, title: string) => void
    delete?: (id: number) => void
}

export default function TodoList(props: TodoListProps) {
    return (
        <React.Fragment>
            {props.todoList!.map(todoItem => {
                return <TodoCard 
                            todoItem={todoItem} 
                            done={props.done!} 
                            cancell={props.cancell!}
                            updateTitle={props.updateTitle!}
                            delete={props.delete!}
                        />
            })}
        </React.Fragment>
    );
}