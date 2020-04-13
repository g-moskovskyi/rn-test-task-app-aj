import { SEND_INVITATION } from '../users';
import { CHANGE_FILTERS } from '../filters';
import { setFilteredUsers } from './actions';
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

  if (action.type === CHANGE_FILTERS) {
    const state = getState();
    getFilteredUsers(state).then((res) => {
      dispatch(setFilteredUsers(res));
    });
  }

  next(action);
};

export const filteredUsersMiddlewares = [setFilteredUsersMiddleware];
