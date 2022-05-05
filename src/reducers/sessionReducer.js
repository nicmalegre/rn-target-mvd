import { createReducer } from '@rootstrap/redux-tools';
import {
  loginSuccess,
  signUpSuccess,
  logoutSuccess,
  updateSession,
  updateUserSuccess,
} from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

const handleUpdateUserSuccess = (state, { payload }) => {
  state.user = payload;
};

export default createReducer(initialState, {
  [loginSuccess]: handleLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
  [updateUserSuccess]: handleUpdateUserSuccess,
});
