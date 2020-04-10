import { SET_FILTERS, CLEAN_FILTERS } from './constants';

const initialState = {
  params: 'empty',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        params: action.payload,
      };
    case CLEAN_FILTERS:
      return {
        ...state,
        params: action.payload,
      };
    default:
      return state;
  }
};

export { filters };
