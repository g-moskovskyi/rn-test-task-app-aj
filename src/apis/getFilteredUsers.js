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

const ageCondition = (filters, dob) => {
  if (filters != 'empty') {
    const userAge = age(dob);
    return userAge >= filters.age.from && userAge <= filters.age.to;
  }
  return true;
};

const genderCondition = (filters, gender) => {
  if (filters != 'empty') {
    if (filters.gender == 'both') {
      return true;
    } else {
      return gender === filters.gender;
    }
  }
  return true;
};
const filteredUsers = (items, searchFilter, filters) => {
  return items.filter((item) => {
    return (
      searchCondition(searchFilter, item.first_name, item.last_name) &&
      genderCondition(filters, item.gender) &&
      ageCondition(filters, item.dob)
    );
  });
};

const getFilteredUsers = async (items, searchFilter, filters) => {
  const filteredUsersResult = filteredUsers(items, searchFilter, filters);

  try {
    const response = await reqImmitation(filteredUsersResult);
    if (response.length === 0) return 'no_results';
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getFilteredUsers };
