import { createReducer } from '@rootstrap/redux-tools';
import { getConversationsSuccess } from 'actions/conversationActions';

const initialState = {
  conversations: [],
};

const handleGetConversationsSuccess = (state, { payload }) => {
  state.conversations = payload;
};

export default createReducer(initialState, {
  [getConversationsSuccess]: handleGetConversationsSuccess,
});
