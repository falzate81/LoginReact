import {take, takeEvery, call, put, fork, all} from 'redux-saga/effects';
import {studentActionsTypes} from '../actions/types/studentActionsTypes';
import {StudentsService} from '../services/StudentsService'

export function * fetchStudentWorker(action)
{
    try
    {
        let response = yield StudentsService.getStudentByEmail(action.payload.studentUser);
        yield put({type: studentActionsTypes.STUDENT_DATA_SUCCESS, studentResponse: response});

    }
    catch (error)
    {
        console.log('El servicio me devolvió un error: ' + error.message);
        yield put({type: studentActionsTypes.STUDENT_DATA_ERROR});

    }
}

export function * fetchStudentWatch()
{
    yield takeEvery(studentActionsTypes.STUDENT_DATA_BEGIN, fetchStudentWorker);
}

export default function * otherSaga()
{
    yield all([
        fork(fetchStudentWatch)
    ]);
}