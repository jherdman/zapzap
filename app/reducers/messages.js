import * as types from '../actions/types';

const initialState = {
  filter: undefined,
  all: {},
};

export default function messages(state, action) {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      return addMessage(state, action);
    }

    default:
      return state || initialState;
  }
}

function addMessage(currentState, { payload }/*{data: {attributes, id}}*/) {
  let id = Math.round(Math.random() * 100);

  let message = { [id]: { id, ...payload } };

  let messages = {
    ...currentState.all,
    ...message,
  };

  return { ...currentState.all, ...{ all: messages } };
}

export function getMessage({ messages: { all } }, id) {
  return all && all[id];
}

export function getMessages({ messages: { all } }) {
  return Object.values(all);
}
