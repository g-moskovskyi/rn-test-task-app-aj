const sortUsers = (users) => {
  users.sort((prev, next) => {
    if (prev.first_name < next.first_name) return -1;
    if (prev.first_name < next.first_name) return 1;
  });
  return users;
};

const usersABC = (users) => {
  let arr = users.map((item) => item.first_name[0].toUpperCase());
  let alphabet = arr.reduce((unique, item) =>
    unique.includes(item) ? unique : [...unique, item]
  );
  return alphabet;
};

export { sortUsers, usersABC };
