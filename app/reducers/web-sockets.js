import * as types from '../actions/types';

const initialState = {
  socket: undefined,
  all: [],
  error: undefined,
  isReady: false,
  isConnected: false,
  isError: false,
};

export default function webSockets(state, action) {
  switch (action.type) {
    case types.SET_UP_SOCKET: {
      return setUpSocket(state, action);
    }

    case types.SOCKET_CONNECTED: {
      return socketConnected(state, action);
    }

    case types.SOCKET_ERROR: {
      return socketError(state, action);
    }

    case types.JOIN_CHANNEL: {
      return joinChannel(state, action);
    }

    default:
      return state || initialState;
  }
}

function setUpSocket(currentState, { socket }) {
  return { ...currentState, ...{ socket, isReady: true } };
}

function socketConnected(currentState) {
  return { ...currentState, ...{ isConnected: true } };
}

function socketDisconnected(currentState) {
  return { ...currentState, ...{ isConnected: false } };
}

function socketError(currentState, payload) {
  return { ...currentState, ...{ isError: true, payload } };
}

export function getSocket({ webSockets: { socket } }) { return socket; };

export function getChannel({ webSockets: { all } }, channelName) {
  return all[channelName];
}

export function joinChannel(currentState, { payload }) {
  let channels = {
    ...currentState.all,
    ...{ payload }
  };

  return { ...currentState, ...{ all: channels } };
}
