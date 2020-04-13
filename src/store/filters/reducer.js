import {
  CHANGE_FILTERS,
  FETCH_SEARCH_FILTER,
  SET_SEARCH_FILTER,
  CLEAN_SEARCH_FILTER,
  SET_AGE_FILTER,
  SET_GENDER_FILTER,
  CLEAN_FILTERS,
} from './constants';

const initialState = {
  searchFilter: '',
  ageFilter: 'empty',
  genderFilter: 'empty',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return state;
    case FETCH_SEARCH_FILTER:
      return state;
    case SET_SEARCH_FILTER:
      return {
        ...state,
        ...{ searchFilter: action.payload },
      };
    case CLEAN_SEARCH_FILTER:
      return {
        ...state,
        ...{ searchFilter: '' },
      };
    case SET_AGE_FILTER:
      return {
        ...state,
        ...{ ageFilter: action.payload },
      };
    case SET_GENDER_FILTER:
      return {
        ...state,
        ...{ genderFilter: action.payload },
      };
    case CLEAN_FILTERS:
      return {
        ...state,
        ...{
          searchFilter: '',
          ageFilter: 'empty',
          genderFilter: 'empty',
        },
      };
    default:
      return state;
  }
};

export { filters };
