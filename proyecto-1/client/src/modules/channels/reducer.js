/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  listChannel,
  createChannel,
  joinChannel,
  leaveChannel,
  pushMessageChannel,
  pullMessageChannel,
  cleanChannelMessages,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  channels: [],
  messages: [],
  channel: null,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case listChannel.TRIGGER:
    case createChannel.TRIGGER:
    case joinChannel.TRIGGER:
    case leaveChannel.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;
    case listChannel.SUCCESS:
      draft.channels = payload;
      break;
    case pullMessageChannel.SUCCESS:
      draft.messages.push(payload);
      break;
    case joinChannel.SUCCESS:
    case createChannel.SUCCESS:
      draft.channel = payload;
      break;
    case leaveChannel.SUCCESS:
      draft.channel = null;
      draft.messages = [];
      break;
    case listChannel.FAILURE:
    case createChannel.FAILURE:
    case joinChannel.FAILURE:
    case leaveChannel.FAILURE:
      draft.error = payload;
      break;
    case listChannel.FULFILL:
    case createChannel.FULFILL:
    case joinChannel.FULFILL:
    case leaveChannel.FULFILL:
      draft.loading = false;
      break;
    case cleanChannelMessages.toString():
      draft.messages = [];
      break;
  }
}, initialState);

export default reducer;
