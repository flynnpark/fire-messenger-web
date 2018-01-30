import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import styles from "./styles.scss";
import Auth from "components/Auth";

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
}

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "Logged in Main"} />
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

export default App;
