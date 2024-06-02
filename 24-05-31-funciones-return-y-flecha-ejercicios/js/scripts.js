/* EJERCICIOS DE FUNCIONES CON RETURN */

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

function getAverage(numberA, numberB, numberC) {
  return (numberA + numberB + numberC) / 3;
}

const resultAverage = getAverage(2, 3, 4);

console.log(resultAverage);



/* - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio. */

function getDiscount(discount, price) {
  return price - (price * discount) / 100;
}

const resultDiscount = getDiscount(10, 100);

console.log(resultDiscount);



/* - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión */

function getWords(wordA, wordB) {
  return wordA + '-' + wordB;
}

const resultWords = getWords('lima', 'limón');

console.log(resultWords);



/* - Crea una función que reciba un número de kilómetros y los devuelva convertidos a metros. */

function getMeters(kmA) {
  return kmA * 1000;
}

const resultMeters = getMeters(5);

console.log(resultMeters);



/* - Crea una función que reciba un número de horas y las devuelva convertidas a segundos. */

function getSeconds(hourA) {
  return hourA * 3600;
}

const resultSeconds = getSeconds(2);

console.log(resultSeconds);



/* EJERCICIOS DE FUNCIONES DE FLECHA */

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

const getAverage2 = (numberA, numberB, numberC) => (numberA + numberB + numberC) / 3;

const resultAverage2 = getAverage2(2, 3, 4);

console.log(resultAverage2);



/* - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio. */

const getDiscount2 = (discount, price) => price - (price * discount) / 100;

const resultDiscount2 = getDiscount2(10, 100);

console.log(resultDiscount2);



/* - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión */

const getWords2 = (wordA, wordB) => wordA + '-' + wordB;

const resultWords2 = getWords2('lima', 'limón');

console.log(resultWords2);



/* - Crea una función que reciba un número de kilómetros y los devuelva convertidos a metros. */

const getMeters2 = kmA => kmA * 1000;

const resultMeters2 = getMeters2(5);

console.log(resultMeters2);



/* - Crea una función que reciba un número de horas y las devuelva convertidas a segundos. */

const getSeconds2 = hourA => hourA * 3600;

const resultSeconds2 = getSeconds2(2);

console.log(resultSeconds2);
