export const SET_USERS = '@@SET_USERS';
export const SET_USERS_ABC = '@@SET_USERS_ABC';
export const SENT_INVITATION = '@@SENT_INVITATION';
export const SET_SEARC_FILTER = '@@SET_SEARC_FILTER';
export const SET_FILTRED_USERS = '@@SET_FILTRED_USERS';
export const SET_SET_FILTERS = '@@SET_FILTERS';

import { fetchUsers } from '../../apis/fetchUsers';
import { usersABC } from '../middlewares/users';

export const setUsers = () => (dispatch) => {
  fetchUsers(dispatch, SET_USERS, SET_USERS_ABC);
};

export const sentInvitation = (id) => (dispatch, getState) => {
  const state = getState();
  const filtredUsers = state.users.filter((item) => item.id !== id);

  dispatch({
    type: SENT_INVITATION,
    setUsers: filtredUsers,
  });
  dispatch(setUsersABC(filtredUsers));

  if (state.searchFilter) {
    dispatch(setFilteredUsers(state.searchFilter));
  }
};

export const setUsersABC = (users) => (dispatch) => {
  const abc = usersABC(users);
  dispatch({
    type: SET_USERS_ABC,
    setUsersABC: abc,
  });
};

export const setSearchFilter = (searchFilter) => (dispatch, getState) => {
  dispatch({ type: SET_SEARC_FILTER, setSearchFilter: searchFilter });
};

export const cleanFilteredUsers = () => {
  return { type: SET_FILTRED_USERS, setFilteredUsers: [] };
};

export const setFilteredUsers = (searchFilter) => (dispatch, getState) => {
  const state = getState();
  const filter = searchFilter.toUpperCase();
  const filtredUsers = state.users.filter((item) => {
    let first = item.first_name.toUpperCase();
    let last = item.last_name.toUpperCase();
    return first.includes(filter) || last.includes(filter);
  });

  if (filtredUsers.length === 0) {
    dispatch({ type: SET_FILTRED_USERS, setFilteredUsers: 'empty' });
  } else {
    dispatch({ type: SET_FILTRED_USERS, setFilteredUsers: filtredUsers });
    dispatch(setUsersABC(filtredUsers));
  }
};
