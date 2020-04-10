import {
  SET_FILTERED_USERS,
  CLEAN_FILTERED_USERS,
  CLEAN_FILTERED_USERS_CHECK,
} from './constants';

export const setFilteredUsers = (users) => (dispatch) => {
  dispatch({ type: SET_FILTERED_USERS, payload: users });
};
export const cleanFilteredUsersCheck = () => (dispatch) => {
  dispatch({ type: CLEAN_FILTERED_USERS_CHECK });
};

export const cleanFilteredUsers = () => (dispatch) => {
  dispatch({ type: CLEAN_FILTERED_USERS, payload: 'empty' });
};
