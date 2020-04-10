import moment from 'moment';

const age = (dob) => {
  const birthday = moment(dob);
  const today = moment();
  return today.diff(birthday, 'years');
};

export { age };
