import { SET_USERS_ABC } from './constants';

export const setUsersABC = (abc) => (dispatch) => {
  dispatch({
    type: SET_USERS_ABC,
    payload: abc,
  });
};
