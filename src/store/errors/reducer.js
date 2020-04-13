import { SET_ERRORS, CLEAN_ERRORS } from './constants';

const initialState = {
  noErrors: true,
};

const errors = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        ...{ noErrors: false, items: action.payload },
      };
    case CLEAN_ERRORS:
      return {
        ...state,
        ...{ noErrors: true },
      };
    default:
      return state;
  }
};

export { errors };
