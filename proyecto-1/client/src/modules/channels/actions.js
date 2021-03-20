import { createRoutine } from 'redux-saga-routines';
import { createAction } from 'redux-actions';
import {
  LIST_CHANNEL,
  CREATE_CHANNEL,
  JOIN_CHANNEL,
  LEAVE_CHANNEL,
  PUSH_MESSAGE_CHANNEL,
  PULL_MESSAGE_CHANNEL,
  CLEAN_CHANNEL_MESSAGES,
} from './types';

export const listChannel = createRoutine(LIST_CHANNEL);
export const createChannel = createRoutine(CREATE_CHANNEL);
export const joinChannel = createRoutine(JOIN_CHANNEL);
export const leaveChannel = createRoutine(LEAVE_CHANNEL);
export const pushMessageChannel = createRoutine(PUSH_MESSAGE_CHANNEL);
export const pullMessageChannel = createRoutine(PULL_MESSAGE_CHANNEL);
export const cleanChannelMessages = createAction(CLEAN_CHANNEL_MESSAGES);
