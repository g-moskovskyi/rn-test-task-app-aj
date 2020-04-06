const sortUsers = (users) => {
  users.sort((prev, next) => {
    const prevWord = prev.first_name.toUpperCase();
    const nextWord = next.first_name.toUpperCase();
    if (prevWord < nextWord) return -1;
    if (prevWord > nextWord) return 1;
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
