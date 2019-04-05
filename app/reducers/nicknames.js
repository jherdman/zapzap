import * as types from '../actions/types';

const initialState = {
  filter: undefined,
  mine: undefined,
  all: [],
};

export default function nicknames(state, action) {
  switch (action.type) {
    case types.SIGN_IN: {
      return signIn(state, action);
    }

    default:
      return state || initialState;
  }
}

function signIn(currentState, { payload: nickname }) {
  return { ...currentState, ...{ mine: nickname, all: [...currentState.all, nickname] } };
}

export function getNicknames({ nicknames: { all } }) {
  return Object.values(all);
}

export function getMyNickname({ nicknames: { mine } }) {
  return mine;
}