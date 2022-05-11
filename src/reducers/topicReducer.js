import { createReducer } from '@rootstrap/redux-tools';
import { getTopicsSuccess } from 'actions/topicActions';

const initialState = {
  topics: [],
};

const handleGetTopicsSuccess = (state, { payload }) => {
  state.topics = payload;
};

export default createReducer(initialState, {
  [getTopicsSuccess]: handleGetTopicsSuccess,
});
