// Storybook dependencies and addons
import 'babel-polyfill'
import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import store from '../src/core/store'
import {configure, storiesOf, action, linkTo, addDecorator} from '@kadira/storybook'
import {setOptions} from '@kadira/storybook-addon-options'
import backgrounds from 'react-storybook-addon-backgrounds'
import StoryRouter from 'storybook-router'

// Styles
import '../src/assets/scss/estilos.scss'

// UI Dependencies
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Options addon
setOptions({
    name             : 'SER+ Storybook',
    url              : '/',
    goFullScreen     : false,
    showLeftPanel    : true,
    showDownPanel    : false,
    showSearchBox    : false,
    downPanelInRight : false,
    sortStoriesByKind: false,
});

// Material UI decorator
addDecorator((story) => (
    <Provider store={store}>
        <MuiThemeProvider>
            {story()}
        </MuiThemeProvider>
    </Provider>
));

// React router decorator
addDecorator(StoryRouter());

// Background decorator
addDecorator(backgrounds([
    {
        name   : 'Grid',
        default: true
    }
]));

const storyRequire = require.context('../stories', true, /.stories.js$/);
function loadStories()
{
    require('../stories/Welcome');
    storyRequire.keys().forEach((filename) => storyRequire(filename))
}

configure(loadStories, module);
