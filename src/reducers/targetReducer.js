import { createReducer } from '@rootstrap/redux-tools';
import { getTargetsSuccess, createTargetSuccess, deleteTargetSuccess } from 'actions/targetActions';

const initialState = {
  targets: [],
};

const handleGetTargetsSuccess = (state, { payload }) => {
  state.targets = payload;
};

const handleCreateTargetSuccess = (state, { payload }) => {
  state.targets = [...state.targets, payload];
};

const handleDeleteTargetSuccess = (state, { payload }) => {
  state.targets = state.targets.filter(({ target: { id } }) => id !== payload);
};

export default createReducer(initialState, {
  [getTargetsSuccess]: handleGetTargetsSuccess,
  [createTargetSuccess]: handleCreateTargetSuccess,
  [deleteTargetSuccess]: handleDeleteTargetSuccess,
});
