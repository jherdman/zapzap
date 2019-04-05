import { combineReducers } from 'redux';
import messages from './messages';
import nicknames from './nicknames';

const rootReducer = combineReducers({
  messages,
  nicknames,
});

export default rootReducer;
