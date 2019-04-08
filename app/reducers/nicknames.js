import * as types from '../actions/types';

let initialNickname = localStorage.getItem('user:nickname');

const initialState = {
  filter: undefined,
  mine: initialNickname,
  all: [initialNickname],
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
