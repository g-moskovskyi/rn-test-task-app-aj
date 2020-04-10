import {
  FETCH_SEARCH_FILTER,
  SET_SEARCH_FILTER,
  CLEAN_SEARCH_FILTER,
} from './constants';

export const fetchSearchFilter = (searchFilter) => (dispatch) => {
  dispatch({ type: FETCH_SEARCH_FILTER, payload: searchFilter });
};

export const setSearchFilter = (searchFilter) => (dispatch) => {
  dispatch({ type: SET_SEARCH_FILTER, payload: searchFilter });
};
export const cleanSearchFilter = () => (dispatch) => {
  dispatch({ type: CLEAN_SEARCH_FILTER, payload: '' });
};
