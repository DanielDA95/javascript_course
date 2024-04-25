// Debemos sacar el promedio de la matriz inicial var matriz_uno = [1, 2, 3, 4];.

const getAverage = arr => {
  const reducer = (total, currentValue) => total + currentValue;
  const total = arr.reduce(reducer);
  return total / arr.length;
};

const arr = [1, 2, 3, 4, 5, 6];

getAverage(arr);
