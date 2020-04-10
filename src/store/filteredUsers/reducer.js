import {
  SET_FILTERED_USERS,
  CLEAN_FILTERED_USERS,
  CLEAN_FILTERED_USERS_CHECK,
} from './constants';

const initialState = { items: 'empty' };

const filteredUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERED_USERS:
      return {
        ...state,
        items: action.payload,
      };
    case CLEAN_FILTERED_USERS:
      return {
        ...state,
        items: action.payload,
      };
    case CLEAN_FILTERED_USERS_CHECK:
      return state;
    default:
      return state;
  }
};

export { filteredUsers };
