import {
  CHANGE_FILTERS,
  FETCH_SEARCH_FILTER,
  SET_SEARCH_FILTER,
  CLEAN_SEARCH_FILTER,
  SET_AGE_FILTER,
  SET_GENDER_FILTER,
  CLEAN_FILTERS,
} from './constants';

export const changeFilters = () => (dispatch) => {
  dispatch({ type: CHANGE_FILTERS });
};
export const fetchSearchFilter = (searchFilter) => (dispatch) => {
  dispatch({ type: FETCH_SEARCH_FILTER, payload: searchFilter });
};

export const setSearchFilter = (searchFilter) => (dispatch) => {
  dispatch({ type: SET_SEARCH_FILTER, payload: searchFilter });
};
export const cleanSearchFilter = () => (dispatch) => {
  dispatch({ type: CLEAN_SEARCH_FILTER });
};
export const setAgeFilter = (filters) => (dispatch) => {
  dispatch({ type: SET_AGE_FILTER, payload: filters });
};

export const setGenderFilter = (filters) => (dispatch) => {
  dispatch({ type: SET_GENDER_FILTER, payload: filters });
};

export const cleanFilters = () => (dispatch) => {
  dispatch({ type: CLEAN_FILTERS });
};
