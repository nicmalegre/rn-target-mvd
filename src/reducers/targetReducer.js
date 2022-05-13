import { createReducer } from '@rootstrap/redux-tools';
import { getTargetsSuccess, createTargetSuccess } from 'actions/targetActions';

const initialState = {
  targets: [],
};

const handleGetTargetsSuccess = (state, { payload }) => {
  state.targets = payload;
};

const handleCreateTargetSuccess = (state, { payload }) => {
  state.targets = [...state.targets, payload];
};

export default createReducer(initialState, {
  [getTargetsSuccess]: handleGetTargetsSuccess,
  [createTargetSuccess]: handleCreateTargetSuccess,
});
