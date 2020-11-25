import React from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { atom, useRecoilState } from 'recoil';

export const todoFilterEnabledState = atom({
    key: 'todoFilterState',
    default: false
});

export const todoFilterModeDoneState = atom({
    key: 'todoFilterModeDoneState',
    default: false
});

export default function TodoFilter() {
    const [todoFilterEnabled, setTodoFilterEnabled] = 
        useRecoilState(todoFilterEnabledState);
    const [todoFilterModeDone, setTodoFilterModeDone] = 
        useRecoilState(todoFilterModeDoneState);

    return (
        <Container>
            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={todoFilterEnabled}
                                onChange={(event) => { setTodoFilterEnabled(event.target.checked) }}
                                name="enabled"
                            />}
                        label="Filter Enabled"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={todoFilterModeDone}
                                onChange={(event) => { setTodoFilterModeDone(event.target.checked) }}
                                name="fileterMode"
                            />}
                        label="Compleated View"
                    />
                </FormGroup>
            </FormControl>
        </Container>
    );
}