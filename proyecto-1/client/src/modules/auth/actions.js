import { createRoutine } from 'redux-saga-routines';
import { LOGIN, REGISTER, LOGOUT } from './types';

export const login = createRoutine(LOGIN);
export const logout = createRoutine(LOGOUT);
export const register = createRoutine(REGISTER);
