import { push } from 'connected-react-router';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import http from 'utils/http';

import {
  listQueue,
  createQueue,
  joinQueue,
  leaveQueue,
  pushMessage,
  pullMessage,
} from './actions';

export function* listQueueSaga() {
  try {
    yield put(listQueue.request());
    const { data } = yield call(http, 'queue/list', 'get');
    yield put(listQueue.success(data));
  } catch (error) {
    yield put(listQueue.failure(error));
  } finally {
    yield put(listQueue.fulfill());
  }
}

export function* createQueueSaga({ payload }) {
  try {
    yield put(createQueue.request());
    yield call(http, 'queue/create', 'post', { id: payload });
    yield put(push(`queue/${payload}`));
    yield put(createQueue.success(payload));
  } catch (error) {
    yield put(createQueue.failure(error));
  } finally {
    yield put(createQueue.fulfill());
  }
}

export function* joinQueueSaga({ payload }) {
  try {
    yield put(joinQueue.request());
    yield put(push(`queue/${payload}`));
    yield put(joinQueue.success(payload));
  } catch (error) {
    yield put(joinQueue.failure(error));
  } finally {
    yield put(joinQueue.fulfill());
  }
}

// export function* leaveQueueSaga() {
//   try {
//     yield put(leaveQueue.request());
//     const data = yield call();
//     yield put(leaveQueue.success(data));
//   } catch (error) {
//     yield put(leaveQueue.failure(error));
//   } finally {
//     yield put(leaveQueue.fulfill());
//   }
// }

export function* pushMessageSaga({ payload }) {
  try {
    yield put(pushMessage.request());
    const { data } = yield call(http, 'queue/push', 'post', payload);
    yield put(pushMessage.success());
  } catch (error) {
    yield put(pushMessage.failure(error));
  } finally {
    yield put(pushMessage.fulfill());
  }
}

export function* pullMessageSaga({ payload }) {
  try {
    yield put(pullMessage.request());
    const { data } = yield call(http, `queue/pull/${payload}`);
    if (data) {
      yield put(pullMessage.success(data));
    }
  } catch (error) {
    yield put(pullMessage.failure(error));
  } finally {
    yield put(pullMessage.fulfill());
  }
}

export default function* queueWatcher() {
  yield all([takeLatest(listQueue.TRIGGER, listQueueSaga)]);
  yield all([takeLatest(joinQueue.TRIGGER, joinQueueSaga)]);
  yield all([takeLatest(createQueue.TRIGGER, createQueueSaga)]);
  yield all([takeLatest(pushMessage.TRIGGER, pushMessageSaga)]);
  yield all([takeLatest(pullMessage.TRIGGER, pullMessageSaga)]);
}
