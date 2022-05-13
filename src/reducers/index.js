import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import targets from 'reducers/targetReducer';
import topics from 'reducers/topicReducer';

import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  session,
  targets,
  topics,
  actionStatus: statusReducer,
});

export default AppReducer;
