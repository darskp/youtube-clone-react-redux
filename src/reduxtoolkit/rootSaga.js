import { all } from 'redux-saga/effects';
import { videosSagas } from './videoSagas';
import authSaga from './auth/authSaga';

export default function* rootSaga() {
    yield all([authSaga(),...videosSagas])
}