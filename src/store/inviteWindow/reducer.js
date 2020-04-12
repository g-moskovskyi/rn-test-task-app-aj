import { OPEN_INVITE_WINDOW, CLOSE_INVITE_WINDOW } from './constants';

const initialState = {
  visible: false,
  id: 'empty',
};

const inviteWindow = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INVITE_WINDOW:
      return {
        ...state,
        visible: true,
        id: action.payload,
      };
    case CLOSE_INVITE_WINDOW:
      return {
        ...state,
        visible: false,
        id: 'empty',
      };
    default:
      return state;
  }
};

export { inviteWindow };
