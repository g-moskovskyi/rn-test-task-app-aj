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
  filters: { age: { from: [], to: [] }, sex: 'both' },
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
    // const appliedFilters = action.filters;
    //   const updatedFilteredMeals = state.meals.filter(meal => {
    //     if (appliedFilters.glutenFree && !meal.isGlutenFree) {
    //       return false;
    //     }
    //     if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
    //       return false;
    //     }
    //     if (appliedFilters.vegetarian && !meal.isVegetarian) {
    //       return false;
    //     }
    //     if (appliedFilters.vegan && !meal.isVegan) {
    //       return false;
    //     }
    //     return true;
    //   });
    //   return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export { usersReducer };
