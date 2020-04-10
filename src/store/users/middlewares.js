import { FETCH_USERS } from './constants';
import { fetchUsers } from '../../apis/fetchUsers';
import { setUsers } from './actions';

const sortUsers = (users) => {
  users.sort((prev, next) => {
    const prevWord = prev.first_name.toUpperCase();
    const nextWord = next.first_name.toUpperCase();
    if (prevWord < nextWord) return -1;
    if (prevWord > nextWord) return 1;
  });
  return users;
};

const setUsersMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type == FETCH_USERS) {
    fetchUsers(dispatch).then((res) => {
      if (typeof res !== undefined) {
        const users = res.name == 'Unauthorized' ? 'empty' : sortUsers(res);
        dispatch(setUsers(users));
      }
    });
  }

  next(action);
};

export const usersMiddlewares = [setUsersMiddleware];
