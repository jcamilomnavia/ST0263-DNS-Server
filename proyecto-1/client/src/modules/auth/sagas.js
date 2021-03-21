import { push } from 'connected-react-router';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import http from 'utils/http';

import { login, register } from './actions';

export function* loginSaga({ payload }) {
  try {
    yield put(login.request());
    const { data } = yield call(http, 'login', 'post', payload);
    yield put(push('/room'));
    yield put(login.success(data));
  } catch (error) {
    yield put(login.failure(error));
  } finally {
    yield put(login.fulfill());
  }
}

export function* registerSaga({ payload }) {
  try {
    yield put(register.request());
    yield call(http, 'register', 'post', payload);
    yield put(register.success(payload));
  } catch (error) {
    yield put(register.failure(error));
  } finally {
    yield put(register.fulfill());
  }
}

export default function* authWatcher() {
  yield all([takeLatest(login.TRIGGER, loginSaga)]);
  yield all([takeLatest(register.TRIGGER, registerSaga)]);
}
