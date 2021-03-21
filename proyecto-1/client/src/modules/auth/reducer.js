/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { login, register } from './actions';

const initialState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  token: null,
  me: null,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case login.TRIGGER:
    case register.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;
    case login.SUCCESS:
      draft.isLoggedIn = true;
      draft.token = payload.token;
      draft.me = payload.user;
      break;
    case register.SUCCESS:
      draft.me = payload;
      break;
    case login.FAILURE:
    case register.FAILURE:
      draft.error = payload;
      break;
    case login.FULFILL:
    case register.FULFILL:
      draft.loading = false;
      break;
  }
}, initialState);

export default reducer;
