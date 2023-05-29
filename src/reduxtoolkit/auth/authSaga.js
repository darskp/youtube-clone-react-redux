import { takeLatest, put, call } from 'redux-saga/effects';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { loginfail, loginsuccess, regsuccess, regfail } from '../feature/authSlice';

function* loginUser(action) {
  const { email, password } = action.payload;
  try {
    yield call(signInWithEmailAndPassword, auth, email, password);
    yield put(loginsuccess({ email, password }));
  } catch (error) {
    yield put(loginfail(error.message));
  }
}

function* regUser(action) {
  const { email, password } = action.payload;
  try {
    yield call(createUserWithEmailAndPassword, auth, email, password);
    yield put(regsuccess({ email, password }));
  } catch (error) {
    yield put(regfail(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest('auth/login', loginUser);
  yield takeLatest('auth/register', regUser);
}
