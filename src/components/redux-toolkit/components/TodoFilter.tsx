import React from 'react';
import { TodoFilterState } from '../state/slices/TodoFilter';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export interface TodoFilterProps {
    filter: TodoFilterState
    changeFilter?: (checked: boolean) => void
    changeFilterMode?: (checked: boolean) => void
}

export default function TodoFilter(props: TodoFilterProps) {
    return (
        <Container>
            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={props.filter.filterEnabled}
                                onChange={(event) => { props.changeFilter!(event.target.checked) }}
                                name="enabled"
                            />}
                        label="Filter Enabled"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={props.filter.filterModeDone}
                                onChange={(event) => { props.changeFilterMode!(event.target.checked) }}
                                name="fileterMode"
                            />}
                        label="Compleated View"
                    />
                </FormGroup>
            </FormControl>
        </Container>
    );
}