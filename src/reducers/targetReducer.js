import { createReducer } from '@rootstrap/redux-tools';
import { createTargetSuccess, deleteTargetSuccess } from 'actions/targetActions';

const initialState = {
  targets: [],
};

const handleCreateTargetSuccess = (state, { payload }) => {
  state.targets = [...state.targets, payload];
};

const handleDeleteTargetSuccess = (state, { payload }) => {
  state.targets = state.targets.filter(({ target: { id } }) => id !== payload);
};

export default createReducer(initialState, {
  [createTargetSuccess]: handleCreateTargetSuccess,
  [deleteTargetSuccess]: handleDeleteTargetSuccess,
});
