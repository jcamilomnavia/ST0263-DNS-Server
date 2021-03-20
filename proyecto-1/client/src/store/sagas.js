/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-catch */
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { all, call } from 'redux-saga/effects';
import queueWatcher from 'modules/queue/sagas';

function* rootSaga() {
  try {
    yield all([
      // external
      call(routinePromiseWatcherSaga),

      // app
      call(queueWatcher),
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
