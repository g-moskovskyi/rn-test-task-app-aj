import { SET_ERRORS, CLEAN_ERRORS } from './constants';

const initialState = {
  items: 'empty',
};

const errors = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        items: action.payload,
      };
    case CLEAN_ERRORS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export { errors };
