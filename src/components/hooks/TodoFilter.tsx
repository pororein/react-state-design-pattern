import React, {useState} from 'react';
import { TodoItem, TodoItemAction } from './TodoList';
import TodoCard, { TodoCardProps } from './TodoCard';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export interface TodoFilterProps {
    todoList: TodoItem[]
    updateTitle: (id:number, updateText: string) => void
    done: (id:number) => void
    cancell: (id:number) => void
    delete: (id:number) => void
}

export interface TodoFilterState {
    filterEnabled: boolean
    doneFilter: boolean
}

export default function TodoFilter(props: TodoFilterProps) {
    const [filterEnabled, setFilterEnabled] = useState(false);
    const [doneFilter, setDoneFilter] = useState(false);

    const createTodoCard = (item: TodoItem, props: TodoFilterProps): JSX.Element => {
        return <TodoCard 
                    key={item.id}
                    todoItem={item}
                    updateTitle={(id: number, updateText: string) => {props.updateTitle(id, updateText)} }
                    done={(id: number) => {props.done(id)} } 
                    cancell={(id: number) => {props.cancell(id)} } 
                    delete={(id: number) => {props.delete(id)} } 
                />
    }

    const filter = (): JSX.Element[] => {
        let todoCards: JSX.Element[] = [];

        props.todoList
            .filter((item) => item.compleated == doneFilter)
            .map((item) => {
                todoCards.push(
                    createTodoCard(item, props)
                )
            });
        return todoCards;
    }

    const viewItem = (): JSX.Element[] => {
        let todoCards: JSX.Element[] = [];

        if (filterEnabled) {
            return filter();
        } else {
            props.todoList.map((item) => {
                todoCards.push(
                    createTodoCard(item, props)
                )
            });

            return todoCards;
        }
    }

    return (
        <Container>
            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={filterEnabled}
                                onChange={(event) => { setFilterEnabled(event.target.checked) }}
                                name="enabled"
                            />}
                        label="Filter Enabled"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={doneFilter}
                                onChange={(event) => { setDoneFilter(event.target.checked) }}
                                name="fileterMode"
                            />}
                        label="Compleated View"
                    />
                </FormGroup>
            </FormControl>
            {
                viewItem()
            }
        </Container>
    );
}