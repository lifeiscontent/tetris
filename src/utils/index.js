export const createMatrix = (width, height) =>
  Array(height)
    .fill()
    .map(() => Array(width).fill(0));
