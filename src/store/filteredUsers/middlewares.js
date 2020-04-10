import { SET_SEARCH_FILTER } from '../searchFilter/constants';
import { CLEAN_FILTERED_USERS_CHECK } from './constants';
import { SET_FILTERS } from '../filters/constants';
import { SEND_INVITATION } from '../users/constants';
import { setFilteredUsers, cleanFilteredUsers } from './actions';
import { getFilteredUsers } from '../../apis/getFilteredUsers';

const setFilteredUsersMiddleware = ({ dispatch, getState }) => (next) => (
  action
) => {
  if (action.type === SEND_INVITATION) {
    const state = getState();
    const items = action.payload;
    const searchFilter = state.searchFilter.params;
    const filters = state.filters.params;
    if (searchFilter !== '' || filters !== 'empty') {
      getFilteredUsers(items, searchFilter, filters).then((res) => {
        dispatch(setFilteredUsers(res));
      });
    }
  }
  if (action.type === SET_SEARCH_FILTER) {
    const state = getState();
    const items = state.users.items;
    const searchFilter = action.payload;
    const filters = state.filters.params;
    getFilteredUsers(items, searchFilter, filters).then((res) => {
      dispatch(setFilteredUsers(res));
    });
  }

  if (action.type === SET_FILTERS) {
    const state = getState();
    const items = state.users.items;
    const searchFilter = state.searchFilter.params;
    const filters = action.payload;
    getFilteredUsers(items, searchFilter, filters).then((res) => {
      dispatch(setFilteredUsers(res));
    });
  }

  if (action.type === CLEAN_FILTERED_USERS_CHECK) {
    const state = getState();
    const items = state.users.items;
    const searchFilter = state.searchFilter.params;
    const filters = state.filters.params;
    if (searchFilter === '' && filters === 'empty') {
      dispatch(cleanFilteredUsers());
      next(action);
    }
    getFilteredUsers(items, searchFilter, filters).then((res) => {
      dispatch(setFilteredUsers(res));
    });
  }
  next(action);
};

export const filteredUsersMiddlewares = [setFilteredUsersMiddleware];
