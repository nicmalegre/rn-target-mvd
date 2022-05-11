import { createReducer } from '@rootstrap/redux-tools';
import { createTargetSuccess } from 'actions/targetActions';

const initialState = {
  targets: [],
};

const handleCreateTargetSuccess = (state, { payload }) => {
  state.targets = state.targets.concat(payload);
};

export default createReducer(initialState, {
  [createTargetSuccess]: handleCreateTargetSuccess,
});
