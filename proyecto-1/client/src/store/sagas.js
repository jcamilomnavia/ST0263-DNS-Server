/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-catch */
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { all, call } from 'redux-saga/effects';
import queueWatcher from 'modules/queue/sagas';
import channelWatcher from 'modules/channels/sagas';
import authWatcher from 'modules/auth/sagas';

function* rootSaga() {
  try {
    yield all([
      call(authWatcher),
      // external
      call(routinePromiseWatcherSaga),

      // app
      call(queueWatcher),
      call(channelWatcher),
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
