import { push } from 'connected-react-router';
import { getMe } from 'modules/auth/selectors';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import http from 'utils/http';

import {
  listChannel,
  createChannel,
  joinChannel,
  leaveChannel,
  pushMessageChannel,
  pullMessageChannel,
} from './actions';

export function* listChannelSaga() {
  try {
    yield put(listChannel.request());
    const { data } = yield call(http, 'channels/list', 'get');
    yield put(listChannel.success(data));
  } catch (error) {
    yield put(listChannel.failure(error));
  } finally {
    yield put(listChannel.fulfill());
  }
}

export function* createChannelSaga({ payload }) {
  try {
    yield put(createChannel.request());
    yield call(http, 'channels/create', 'post', { id: payload });
    yield put(joinChannel(payload));
    yield put(createChannel.success(payload));
  } catch (error) {
    yield put(createChannel.failure(error));
  } finally {
    yield put(createChannel.fulfill());
  }
}

export function* joinChannelSaga({ payload }) {
  try {
    yield put(joinChannel.request());
    const { username: consumer } = yield select(getMe);
    yield call(http, 'channels/subscribe', 'post', { id: payload, consumer });
    yield put(push(`channel/${payload}`));
    yield put(joinChannel.success(payload));
  } catch (error) {
    yield put(joinChannel.failure(error));
  } finally {
    yield put(joinChannel.fulfill());
  }
}

export function* leaveChannelSaga({ payload }) {
  try {
    yield put(leaveChannel.request());
    const { username: consumer } = yield select(getMe);
    yield call(http, 'channels/unsubscribe', 'post', {
      id: payload,
      consumer,
    });
    yield put(push('/room/channel'));
    yield put(leaveChannel.success());
  } catch (error) {
    yield put(leaveChannel.failure(error));
  } finally {
    yield put(leaveChannel.fulfill());
  }
}

export function* pushMessageChannelSaga({ payload }) {
  try {
    yield put(pushMessageChannel.request());
    const { data } = yield call(http, 'channels/push', 'post', payload);
    yield put(pushMessageChannel.success());
  } catch (error) {
    yield put(pushMessageChannel.failure(error));
  } finally {
    yield put(pushMessageChannel.fulfill());
  }
}

export function* pullMessageChannelSaga({ payload }) {
  try {
    yield put(pullMessageChannel.request());
    const { username: consumer } = yield select(getMe);
    const { data } = yield call(http, `channels/pull/${payload}/${consumer}`);
    if (data) {
      yield put(pullMessageChannel.success(data));
    }
  } catch (error) {
    yield put(pullMessageChannel.failure(error));
  } finally {
    yield put(pullMessageChannel.fulfill());
  }
}

export default function* channelWatcher() {
  yield all([takeLatest(listChannel.TRIGGER, listChannelSaga)]);
  yield all([takeLatest(joinChannel.TRIGGER, joinChannelSaga)]);
  yield all([takeLatest(leaveChannel.TRIGGER, leaveChannelSaga)]);
  yield all([takeLatest(createChannel.TRIGGER, createChannelSaga)]);
  yield all([takeLatest(pushMessageChannel.TRIGGER, pushMessageChannelSaga)]);
  yield all([takeLatest(pullMessageChannel.TRIGGER, pullMessageChannelSaga)]);
}
