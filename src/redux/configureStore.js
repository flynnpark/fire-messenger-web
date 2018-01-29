import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import user from "redux/modules/user";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const reducer = combineReducers({
    user,
    routing: routerReducer
});

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export { history };

export default store();
