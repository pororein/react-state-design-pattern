import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ClassComponentApp from "./classComponents/TodoList";

export default function consoleContents() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/ClassComponents" component={ClassComponentApp} />
            </Switch>
        </React.Fragment>
    );
}