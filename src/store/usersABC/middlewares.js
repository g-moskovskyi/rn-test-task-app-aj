import { SET_USERS, SEND_INVITATION } from '../users/constants';
import {
  SET_FILTERED_USERS,
  CLEAN_FILTERED_USERS,
} from '../filteredUsers/constants';
import { setUsersABC } from './actions';

const usersABC = (users) => {
  let arr = users.map((item) => item.first_name[0].toUpperCase());
  let alphabet = arr.reduce((unique, item) =>
    unique.includes(item) ? unique : [...unique, item]
  );
  return alphabet;
};

const setUsersABCMiddleware = ({ dispatch, getState }) => (next) => (
  action
) => {
  if (
    action.type == SET_USERS ||
    action.type == SET_FILTERED_USERS ||
    action.type == SEND_INVITATION
  ) {
    if (
      action.payload == 'empty' ||
      action.payload == 'no_results' ||
      action.payload.error
    ) {
      dispatch(setUsersABC([]));
    } else {
      const abc = usersABC(action.payload);
      dispatch(setUsersABC(abc));
    }
  }

  if (action.type == CLEAN_FILTERED_USERS) {
    state = getState();
    const abc = usersABC(state.users.result);
    dispatch(setUsersABC(abc));
  }
  next(action);
};

export const usersABCMiddlewares = [setUsersABCMiddleware];
