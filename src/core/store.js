/**
 * Created by lenovo on 05/10/2017.
 */
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './sagas/root.sagas'
import sessionReducer from './reducers/sessionReducer'
import studentReducer from './reducers/studentReducer'
// Compose browser compatibility
function composeWithDevTools()
{
    if(typeof process.env.NODE_ENV != 'undefined' && process.env.NODE_ENV == 'development')
    {
        if(!!window.chrome && !!window.chrome.webstore)
        {
            return compose(applyMiddleware(createLogger(), sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        }
        else
        {
            return compose(applyMiddleware(createLogger(), sagaMiddleware))
        }
    }
    else
    {
        return compose(applyMiddleware(sagaMiddleware))
    }
}

// Initialize saga middleware
let sagaMiddleware = createSagaMiddleware();

// Create store
let store = createStore(
    combineReducers({
        session: sessionReducer,
        studentData: studentReducer,
    }),
    composeWithDevTools()
);

// Inject sagas into the middleware
rootSagas.map((sagas) => sagaMiddleware.run(sagas));

export default store;