export const pick = (obj, keys) =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
