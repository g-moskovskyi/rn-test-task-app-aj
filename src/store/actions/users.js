export const SET_USERS = '@@SET_USERS';
export const SET_USERS_ABC = '@@SET_USERS_ABC';
export const SENT_INVITATION = '@@SENT_INVITATION';
export const SET_FILTERS = '@@SET_FILTERS';

import { fetchUsers } from '../../apis/fetchUsers';
import { usersABC } from '../middlewares/users';

export const setUsers = () => (dispatch) => {
  fetchUsers(dispatch, SET_USERS, SET_USERS_ABC);
};

export const sentInvitation = (id) => (dispatch, getState) => {
  const state = getState();
  const filtredUsers = state.users.filter((item) => item.id !== id);
  const abc = usersABC(filtredUsers);

  dispatch({
    type: SENT_INVITATION,
    setUsers: filtredUsers,
  });
  dispatch({
    type: SET_USERS_ABC,
    setUsersABC: abc,
  });
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filters: filterSettings };
};
