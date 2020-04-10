import { SET_FILTERS, CLEAN_FILTERS } from './constants';

export const setFilters = (filters) => (dispatch) => {
  dispatch({ type: SET_FILTERS, payload: filters });
};

export const cleanFilters = () => (dispatch) => {
  dispatch({ type: CLEAN_FILTERS, payload: 'empty' });
};
