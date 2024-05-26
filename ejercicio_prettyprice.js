const prettyPrice = (grossPrice, extension) => {
  if (Number.isInteger(extension)) {
    extension = extension * 0.01;
  }
  return Math.floor(grossPrice) + extension;
};

prettyPrice(2.2, 0.95); //?
prettyPrice(2.2, 95); //?
prettyPrice(2.2, 0); //?
prettyPrice(2.2, 99); //?

//____________________________________________________________
const prettyPrice = (grossPrice, extension) => {
  const formattedPrice = Math.floor(grossPrice) + extension;
  return formattedPrice;
};

// Ejemplo de uso:
const result = prettyPrice(3.42, 0.95);
console.log(result); // Salida: 3.95
