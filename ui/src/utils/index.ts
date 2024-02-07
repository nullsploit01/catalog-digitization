export const generateID = (length = 6) =>
  Math.floor(Math.random() * Date.now())
    .toString(16)
    .substring(0, length)

export const getFormattedPrice = (price: number = 0) => {
  return price?.toFixed(2)
}
