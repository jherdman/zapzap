import * as types from './types';

export const addMessage = payload => dispatch => dispatch({ type: types.ADD_MESSAGE, payload });
