import { FETCH_USERS, SET_META, SET_USERS, SEND_INVITATION } from './constants';

const initialState = { loading: true };

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return state;
    case SET_META:
      return {
        ...state,
        ...{ loading: false, _meta: action.payload },
      };
    case SET_USERS:
      return {
        ...state,
        ...{ result: action.payload },
      };
    case SEND_INVITATION:
      return {
        ...state,
        ...{ result: action.payload },
      };
    default:
      return state;
  }
};

export { users };
