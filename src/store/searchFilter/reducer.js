import {
  FETCH_SEARCH_FILTER,
  SET_SEARCH_FILTER,
  CLEAN_SEARCH_FILTER,
} from './constants';

const initialState = { params: '' };

const searchFilter = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_FILTER:
      return state;
    case SET_SEARCH_FILTER:
      return {
        ...state,
        params: action.payload,
      };
    case CLEAN_SEARCH_FILTER:
      return {
        ...state,
        params: action.payload,
      };

    default:
      return state;
  }
};

export { searchFilter };
