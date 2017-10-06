import {take, takeEvery, call, put, fork, all} from 'redux-saga/effects';
import {sessionActions} from '../actions/sessionActions';
import {sessionActionTypes} from '../actions/types/sessionActionTypes';
import axios from 'axios';
import {SessionService} from '../services/SessionService';

export function * loginWorker(action)
{
    try
    {
        if(action.user.username == '' || action.user.password == '')
        {
            yield put({type: sessionActionTypes.LOGIN_ERROR, loggedInRes: false});
        }
        else
        {
            /*let response1 = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');*/
            /*let response = yield call(axios.get, 'http://localhost:3000/api/users');*/
            let response = yield SessionService.getSessionUser(action.user.username, action.user.password);

            if(action.user.username == response.email && action.user.password == response.password)
            {
                yield put({type: sessionActionTypes.LOGIN_SUCCESS, response: response, loggedInRes: true});
            }
            else
            {
                yield put({type: sessionActionTypes.LOGIN_SUCCESS, loggedInRes: false});
            }
        }
    }
    catch (error)
    {
        console.log('Me vine por este error...' + error.message)
        yield put({type: sessionActionTypes.LOGIN_ERROR, loggedIn: true});
    }
}

export function * logoutWorker()
{
    try
    {
        yield put({type: sessionActionTypes.SET, loggedIn: false});
    }
    catch (error)
    {
        yield put({type: sessionActionTypes.LOGOUT_ERROR});
    }
}

export function * loginWatch()
{
    yield takeEvery(sessionActionTypes.LOGIN_BEGIN, loginWorker);
}

export function * logoutWatch()
{
    yield takeEvery(sessionActionTypes.LOGOUT_BEGIN, logoutWorker);
}

export default function * sessionSaga()
{
    yield all([
        fork(loginWatch),
        fork(logoutWatch)
    ]);
}