import { createSelector } from 'reselect';

export const getChannel = (state) => state.channel;

export const isChannelLoading = createSelector(
  getChannel,
  (channel) => channel.loading
);
export const getChannelError = createSelector(
  getChannel,
  (channel) => channel.error
);
export const getChannelMessages = createSelector(
  getChannel,
  (channel) => channel.messages
);
export const getChannels = createSelector(
  getChannel,
  (channel) => channel.channels
);
export const getChannelitem = createSelector(
  getChannel,
  (channel) => channel.channel
);
