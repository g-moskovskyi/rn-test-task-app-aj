import { FETCH_SEARCH_FILTER } from './constants';
import { setSearchFilter, cleanSearchFilter } from './actions';
import { cleanFilteredUsersCheck } from '../filteredUsers/actions';

const setSearchFilterMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === FETCH_SEARCH_FILTER) {
    const filter = action.payload;
    if (filter.length > 2) {
      dispatch(setSearchFilter(filter));
    }
    if (filter.length == 2) {
      dispatch(cleanSearchFilter());
      dispatch(cleanFilteredUsersCheck());
    }
  }
  next(action);
};

export const searchFiltersMiddlewares = [setSearchFilterMiddleware];
