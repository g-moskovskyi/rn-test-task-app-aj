import { FETCH_USERS } from './constants';
import { fetchUsers } from '../../apis/fetchUsers';
import { setUsers, setMeta } from './actions';

const sortUsers = (users) => {
  users.sort((prev, next) => {
    const prevWord = prev.first_name.toUpperCase();
    const nextWord = next.first_name.toUpperCase();
    if (prevWord < nextWord) return -1;
    if (prevWord > nextWord) return 1;
  });
  return users;
};

const setUsersMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type == FETCH_USERS) {
    fetchUsers(dispatch).then((res) => {
      const state = getState();
      if (state.errors.noErrors) {
        if (res._meta.success) {
          dispatch(setUsers(sortUsers(res.result)));
        }
        dispatch(setMeta(res._meta));
      }
    });
  }

  next(action);
};

export const usersMiddlewares = [setUsersMiddleware];
