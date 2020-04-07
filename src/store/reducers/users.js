import {
  SET_USERS,
  SET_USERS_ABC,
  SENT_INVITATION,
  SET_SEARC_FILTER,
  SET_FILTRED_USERS,
  SET_FILTERS,
} from '../actions/users';

const initialState = {
  users: [],
  usersABC: [],
  filteredUsers: [],
  searchFilter: '',
  filters: { age: { from: [], to: [] }, gender: 'both' },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.setUsers,
      };
    case SET_USERS_ABC:
      return {
        ...state,
        usersABC: action.setUsersABC,
      };
    case SENT_INVITATION:
      return {
        ...state,
        users: action.setUsers,
      };
    case SET_SEARC_FILTER:
      return {
        ...state,
        searchFilter: action.setSearchFilter,
      };
    case SET_FILTRED_USERS:
      return {
        ...state,
        filteredUsers: action.setFilteredUsers,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.setFilters,
      };
    default:
      return state;
  }
};

export { usersReducer };
