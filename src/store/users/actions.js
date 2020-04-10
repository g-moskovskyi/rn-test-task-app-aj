import { FETCH_USERS, SET_USERS, SEND_INVITATION } from './constants';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setUsers = (users) => (dispatch) => {
  dispatch({
    type: SET_USERS,
    payload: users,
  });
};

export const sendInvitation = (id) => (dispatch, getState) => {
  const state = getState();
  const filtredUsers = state.users.items.filter((item) => item.id !== id);
  const remainingUsers = filtredUsers == [] ? 'no_results' : filtredUsers;
  dispatch({
    type: SEND_INVITATION,
    payload: remainingUsers,
  });
};
