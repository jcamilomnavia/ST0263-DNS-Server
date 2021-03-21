import { createSelector } from 'reselect';

export const getAuth = (state) => state.auth;

export const isAuthLoading = createSelector(getAuth, (auth) => auth.loading);
export const isLoggedIn = createSelector(getAuth, (auth) => auth.isLoggedIn);
export const getToken = createSelector(getAuth, (auth) => auth.token);
export const getMe = createSelector(getAuth, (auth) => auth.me);
