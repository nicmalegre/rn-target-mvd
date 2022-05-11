import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import target from 'reducers/targetReducer';
import topic from 'reducers/topicReducer';

import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  session,
  target,
  topic,
  actionStatus: statusReducer,
});

export default AppReducer;
