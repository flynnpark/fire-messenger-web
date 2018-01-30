import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./styles.scss";

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />
];

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "Logged in Main"} />
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "Log in"} />
    </Switch>
);

export default App;
