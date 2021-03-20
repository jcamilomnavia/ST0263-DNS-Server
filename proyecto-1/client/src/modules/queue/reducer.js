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
  cleanQueueMessages,
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
      break;
    case pullMessage.SUCCESS:
      draft.messages.push(payload);
      break;
    case joinQueue.SUCCESS:
    case createQueue.SUCCESS:
      draft.queue = payload;
      break;
    case leaveQueue.SUCCESS:
      draft.queue = null;
      break;
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
    case cleanQueueMessages.toString():
      draft.messages = [];
      break;
  }
}, initialState);

export default reducer;
