import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { errors } from './errors';
import { users, usersMiddlewares } from './users';
import { usersABC, usersABCMiddlewares } from './usersABC';
import { filteredUsers, filteredUsersMiddlewares } from './filteredUsers';
import { searchFilter, searchFiltersMiddlewares } from './searchFilter';
import { filters } from './filters';
import { inviteWindow } from './inviteWindow';

const rootReducer = combineReducers({
  errors,
  users,
  usersABC,
  filteredUsers,
  searchFilter,
  filters,
  inviteWindow,
});

export default () => {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        ...usersMiddlewares,
        ...usersABCMiddlewares,
        ...searchFiltersMiddlewares,
        ...filteredUsersMiddlewares
      )
    )
  );
};
