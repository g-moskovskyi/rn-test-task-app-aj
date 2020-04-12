import { OPEN_INVITE_WINDOW, CLOSE_INVITE_WINDOW } from './constants';

export const openInviteWindow = (id) => (dispatch) => {
  dispatch({ type: OPEN_INVITE_WINDOW, payload: id });
};

export const closeInviteWindow = () => (dispatch) => {
  dispatch({ type: CLOSE_INVITE_WINDOW });
};
