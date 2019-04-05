import * as types from '../actions/types';

const initialState = {
  filter: undefined,
  all: {
    1: {
      from: 'Kristen',
      body: 'Hi!',
      sentAt: new Date(),
    },
  },
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

function addMessage(currentState, { payload: messageBody }/*{data: {attributes, id}}*/) {
  //let message = {id: {id, ...atributes}};

  let id = Math.round(Math.random() * 100);

  let message = { [id]: { id, from: "Fake", body: messageBody, sentAt: new Date() } };

  let messages = {
    ...currentState.all,
    ...message,
  };

  return {...currentState.all, ...{all: messages}};
}

export function getMessage({ all }, id) {
  return all && all[id];
}

export function getMessages({ messages: { all } }) {
  return Object.values(all);
}
