import { createRoutine } from 'redux-saga-routines';
import { LOGIN, REGISTER } from './types';

export const login = createRoutine(LOGIN);
export const register = createRoutine(REGISTER);
