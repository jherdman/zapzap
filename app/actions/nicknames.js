import * as types from './types';

export const signIn = payload => dispatch => dispatch({ type: types.SIGN_IN, payload });
