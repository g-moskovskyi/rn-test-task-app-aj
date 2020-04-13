import { FETCH_USERS, SET_USERS, SET_META, SEND_INVITATION } from './constants';
import { changeFilters } from '../filters';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setMeta = (meta) => (dispatch) => {
  dispatch({
    type: SET_META,
    payload: meta,
  });
};

export const setUsers = (users) => (dispatch) => {
  dispatch({
    type: SET_USERS,
    payload: users,
  });
};

export const sendInvitation = (id) => (dispatch, getState) => {
  const state = getState();
  const filtredUsers = state.users.result.filter((item) => item.id !== id);
  const remainingUsers = filtredUsers.length == 0 ? 'no_results' : filtredUsers;

  dispatch({
    type: SEND_INVITATION,
    payload: remainingUsers,
  });
  dispatch(changeFilters());
};
