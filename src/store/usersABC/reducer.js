import { SET_USERS_ABC } from './constants';

const initialState = { items: [] };

const usersABC = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_ABC:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export { usersABC };
