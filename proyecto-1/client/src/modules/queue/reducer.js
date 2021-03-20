/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  listQueue,
  createQueue,
  joinQueue,
  leaveQueue,
  pushMessage,
  pullMessage,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  queues: [],
  messages: [],
  queue: null,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case listQueue.TRIGGER:
    case createQueue.TRIGGER:
    case joinQueue.TRIGGER:
    case leaveQueue.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;

    case listQueue.SUCCESS:
      draft.queues = payload;
    case pullMessage.SUCCESS:
      draft.messages.push(payload);
    case joinQueue.SUCCESS:
    case createQueue.SUCCESS:
      draft.queue = payload;
    case leaveQueue.SUCCESS:
      draft.queue = null;

    case listQueue.FAILURE:
    case createQueue.FAILURE:
    case joinQueue.FAILURE:
    case leaveQueue.FAILURE:
      draft.error = payload;
      break;

    case listQueue.FULFILL:
    case createQueue.FULFILL:
    case joinQueue.FULFILL:
    case leaveQueue.FULFILL:
      draft.loading = false;
      break;
  }
}, initialState);

export default reducer;
