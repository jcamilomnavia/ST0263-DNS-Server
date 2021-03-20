import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { persistReducer } from 'redux-persist';

import { rootPersistConfig } from './persistor';
import routerHistory from './history';

import queue from 'modules/queue/reducer';
import channel from 'modules/channels/reducer';

const appReducer = combineReducers({
  // external
  form,
  router: connectRouter(routerHistory),

  // app
  queue,
  channel,
});

const actions = [];

const rootReducer = (state, action) => {
  if (actions.includes(action.type)) {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
