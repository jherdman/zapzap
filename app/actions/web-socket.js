import * as types from './types';

import { Socket } from 'ember-phoenix';

export function setUpSocket(url, options) {
  const socket = new Socket(url, options);

  socket.onOpen(socketOpened);

  socket.onClose(socketDisconnected);

  socket.onError(socketError);

  return function(dispatch) {
    dispatch({ type: types.SET_UP_SOCKET, socket });
  };
}

export function socketOpened() {
  return dispatch => dispatch({ types: type.SOCKET_CONNECTED });
}

export function socketDisconnected() {
  return dispatch => dispatch({ types: type.SOCKET_DISCONNECTED });
}

export const socketError = payload => dispatch => dispatch({ types: type.SOCKET_ERROR, payload });

export function connectSocket() {
  return function(_dispatch, getState) {
    const socket = getState().socket;

    return socket.connect();
  };
}

export function disconnectSocket() {
  return function(_dispatch, getState) {
    const socket = getState().socket;

    return socket.disconnect();
  };
}
