export const reqImmitation = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 400);
  });
};
