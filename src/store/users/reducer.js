import { SET_USERS, SEND_INVITATION, FETCH_USERS } from './constants';

const initialState = { items: ['loading'] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return state;
    case SET_USERS:
      return {
        ...state,
        items: action.payload,
      };
    case SEND_INVITATION:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export { users };
