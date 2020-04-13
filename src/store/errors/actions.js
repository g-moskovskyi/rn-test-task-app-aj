import { SET_ERRORS, CLEAN_ERRORS } from './constants';

export const setErrors = (error) => (dispatch) => {
  dispatch({ type: SET_ERRORS, payload: error });
};

export const cleanErrors = () => (dispatch) => {
  dispatch({ type: CLEAN_ERRORS });
};
