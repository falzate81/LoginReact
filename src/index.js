import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {IndexRoute, Link, Switch, Redirect, hashHistory, browserHistory} from 'react-router-dom'
import store from './core/store'
import Login from './core/components/containers/login/Login'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './assets/scss/estilos.scss'
import { Router, Route } from 'react-router-dom';
import history from './history';
import routes from './routes';
injectTapEventPlugin();


// Example: Action dispatch at index.js level
// store.dispatch(sessionActions.login('Michael', '321'));
// store.dispatch(postsActions.fetchAll());


ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Login}>
                {routes}
            </Route>
        </Router>
    </Provider>
), document.getElementById('content'));
