import { createRoutine } from 'redux-saga-routines';
import {
  LIST_QUEUE,
  CREATE_QUEUE,
  JOIN_QUEUE,
  LEAVE_QUEUE,
  PUSH_MESSAGE,
  PULL_MESSAGE,
} from './types';

export const listQueue = createRoutine(LIST_QUEUE);
export const createQueue = createRoutine(CREATE_QUEUE);
export const joinQueue = createRoutine(JOIN_QUEUE);
export const leaveQueue = createRoutine(LEAVE_QUEUE);
export const pushMessage = createRoutine(PUSH_MESSAGE);
export const pullMessage = createRoutine(PULL_MESSAGE);
