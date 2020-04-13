import { FETCH_SEARCH_FILTER } from './constants';
import { setSearchFilter, cleanSearchFilter, changeFilters } from './actions';

const setSearchFilterMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === FETCH_SEARCH_FILTER) {
    const filter = action.payload;
    if (filter.length > 2) {
      dispatch(setSearchFilter(filter));
      dispatch(changeFilters());
    }
    if (filter.length <= 2) {
      dispatch(cleanSearchFilter());
      dispatch(changeFilters());
    }
  }
  next(action);
};

export const filtersMiddlewares = [setSearchFilterMiddleware];
