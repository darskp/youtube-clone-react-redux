import { all } from 'redux-saga/effects';
import { videosSagas } from './videoSagas';

export default function* rootSaga() {
    yield all([...videosSagas])
}