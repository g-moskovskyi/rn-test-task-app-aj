import { reqImmitation } from './reqImmitation';
import { age } from '../converters/index';

const searchCondition = (searchFilter, first_name, last_name) => {
  if (searchFilter !== '') {
    let filter = searchFilter.toUpperCase();
    let first = first_name.toUpperCase();
    let last = last_name.toUpperCase();
    return first.includes(filter) || last.includes(filter);
  }
  return true;
};

const ageCondition = (ageFilter, userAge) => {
  if (ageFilter != 'empty') {
    return userAge >= ageFilter.from && userAge <= ageFilter.to;
  }
  return true;
};

const genderCondition = (genderFilter, gender) => {
  if (genderFilter !== 'empty') {
    if (genderFilter == 'both') {
      return true;
    } else {
      return gender === genderFilter;
    }
  }
  return true;
};

const filteredUsers = (state) => {
  const searchFilter = state.filters.searchFilter;
  const ageFilter = state.filters.ageFilter;
  const genderFilter = state.filters.genderFilter;

  return state.users.result.filter((item) => {
    const first_name = item.first_name;
    const last_name = item.last_name;
    const userAge = age(item.dob);
    const gender = item.gender;

    return (
      searchCondition(searchFilter, first_name, last_name) &&
      ageCondition(ageFilter, userAge) &&
      genderCondition(genderFilter, gender)
    );
  });
};

const getFilteredUsers = async (state) => {
  const filteredUsersResult = filteredUsers(state);

  try {
    const response = await reqImmitation(filteredUsersResult);
    if (response.length === 0) return 'no_results';
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getFilteredUsers };
