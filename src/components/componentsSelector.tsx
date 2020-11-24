import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClassComponentApp from './classComponents/TodoList';
import HooksApp from './hooks/TodoList';
import ReduxNormalApp from './redux/App';
import ReduxDucksPatternApp from './ducks/App';
import ReduxReDucksPatternApp from './re-ducks/App';
import ReduxToolKitApp from './redux-toolkit/App';

export default function consoleContents() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/ClassComponents" component={ClassComponentApp} />
                <Route exact path="/Hooks" component={HooksApp} />
                <Route exact path="/Redux/Normal" component={ReduxNormalApp} />
                <Route exact path="/Redux/Ducks" component={ReduxDucksPatternApp} />
                <Route exact path="/Redux/Re-ducks" component={ReduxReDucksPatternApp} />
                <Route exact path="/Redux/Toolkit" component={ReduxToolKitApp} />
            </Switch>
        </React.Fragment>
    );
}