import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClassComponentApp from './classComponents/TodoList';
import HooksApp from './hooks/TodoList';
import ReduxNormalApp from './redux/App';

export default function consoleContents() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/ClassComponents" component={ClassComponentApp} />
                <Route exact path="/Hooks" component={HooksApp} />
                <Route exact path="/Redux/Normal" component={ReduxNormalApp} />
            </Switch>
        </React.Fragment>
    );
}