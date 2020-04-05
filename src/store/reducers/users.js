import {
  SET_USERS,
  SET_USERS_ABC,
  SENT_INVITATION,
  SET_FILTERS,
} from '../actions/users';

const initialState = {
  users: [],
  usersABC: [],
  filteredUsers: [],
  filters: [],
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
    // case SET_FILTERS:
    //   const appliedFilters = action.filters;
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
