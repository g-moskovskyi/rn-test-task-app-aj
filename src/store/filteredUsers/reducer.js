import { SET_FILTERED_USERS, CLEAN_FILTERED_USERS } from './constants';

const initialState = { result: 'empty' };

const filteredUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERED_USERS:
      return {
        ...state,
        result: action.payload,
      };
    case CLEAN_FILTERED_USERS:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export { filteredUsers };
