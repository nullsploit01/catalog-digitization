export const generateID = (length = 6) =>
  Math.floor(Math.random() * Date.now())
    .toString(16)
    .substring(0, length)
