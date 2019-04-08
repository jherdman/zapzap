import * as types from './types';

export const signIn = function(payload) {
  return function(dispatch) {
    localStorage.setItem('user:nickname', payload);

    return dispatch({ type: types.SIGN_IN, payload });
  };
}
