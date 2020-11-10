import React from 'react';
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

export default class TodoFilter extends React.Component<TodoFilterProps, TodoFilterState> {
    constructor(props: TodoFilterProps) {
        super(props);
        this.state = {
            filterEnabled: false,
            doneFilter: false
        }
        this.filter.bind(this);
        this.viewItem.bind(this);
        this.createTodoCard.bind(this);
    }

    private createTodoCard(item: TodoItem, props: TodoFilterProps): JSX.Element {
        return <TodoCard 
                    todoItem={item}
                    updateTitle={(id: number, updateText: string) => {props.updateTitle(id, updateText)} }
                    done={(id: number) => {props.done(id)} } 
                    cancell={(id: number) => {props.cancell(id)} } 
                    delete={(id: number) => {props.delete(id)} } 
                />
    }

    private filter(): JSX.Element[] {
        let todoCards: JSX.Element[] = [];

        this.props.todoList
            .filter((item) => item.compleated == this.state.doneFilter)
            .map((item) => {
                todoCards.push(
                    this.createTodoCard(item, this.props)
                )
            });
        return todoCards;
    }

    private viewItem(): JSX.Element[] {
        let todoCards: JSX.Element[] = [];

        if (this.state.filterEnabled) {
            return this.filter();
        } else {
            this.props.todoList.map((item) => {
                todoCards.push(
                    this.createTodoCard(item, this.props)
                )
            });

            return todoCards;
        }
    }

    render() {
        return (
            <Container>
                <FormControl component="fieldset">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.filterEnabled}
                                    onChange={(event) => { this.setState({filterEnabled: event.target.checked}) }}
                                    name="enabled"
                                />}
                            label="Filter Enabled"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.doneFilter}
                                    onChange={(event) => { this.setState({doneFilter: event.target.checked}) }}
                                    name="fileterMode"
                                />}
                            label="Compleated View"
                        />
                    </FormGroup>
                </FormControl>
                {
                    this.viewItem()
                }
            </Container>
        );
    }
}