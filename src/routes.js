/**
 * Created by lenovo on 02/10/2017.
 */

import 'babel-polyfill'
import React from 'react'
import {IndexRoute, Link, Switch, Redirect, hashHistory, browserHistory} from 'react-router-dom'
import {UnderConstruction} from './core/components/underContruction/UnderConstruction';

import {SearchBar} from './core/components/searchBar/SearchBar'
import {MainMenu} from './core/components/mainMenu/MainMenu'
import {Footer} from './core/components/containers/footer/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Router, Route } from 'react-router-dom';

const routes = (
    <MuiThemeProvider>
        <div>
            <div>
                <SearchBar/>
                <MainMenu/>
            </div>
            <Switch>
                {/*<Route exact path="/login" component={Login}/>*/}
                <Route path="/home" component={UnderConstruction}/>
                <Route path="/calendar" component={UnderConstruction}/>
                <Route path="/myPlan" component={UnderConstruction}/>
                <Route path="/myWorks" component={UnderConstruction}/>
                <Route path="/indicators" component={UnderConstruction}/>
                <Route path="/myGroups" component={UnderConstruction}/>
                <Route path="/eduteca" component={UnderConstruction}/>
                <Route path="/notifications" component={UnderConstruction}/>
                <Route path="/miSer" component={UnderConstruction}/>
                <Route path="/help" component={UnderConstruction}/>
                <Route path="/topic" component={UnderConstruction}/>
                <Route path="/areaInfo" component={UnderConstruction}/>
                <Route path="/comments" component={UnderConstruction}/>
                {/*<Route component={Login}/>*/}
            </Switch>
            <Footer/>
        </div>
    </MuiThemeProvider>
)

export default routes;