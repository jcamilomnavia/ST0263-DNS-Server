import { createSelector } from 'reselect';

export const getQueue = (state) => state.queue;

export const isQueueLoading = createSelector(
  getQueue,
  (queue) => queue.loading
);
export const getQueueError = createSelector(getQueue, (queue) => queue.error);
export const getQueueMessages = createSelector(
  getQueue,
  (queue) => queue.messages
);
export const getQueues = createSelector(getQueue, (queue) => queue.queues);
export const getQueueitem = createSelector(getQueue, (queue) => queue.queue);
