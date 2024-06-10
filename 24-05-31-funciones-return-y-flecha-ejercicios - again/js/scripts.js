/* EJERCICIOS DE FUNCIONES CON RETURN */

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

function getAverage(numberA, numberB, numberC) {
  return (numberA + numberB + numberC) / 3;
}

const resultAverage = getAverage(2, 3, 4);

console.log(resultAverage);



/* - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio. */

function getDiscount(discount, price) {
  return price - (discount * price) / 100;
}

const resultDiscount = getDiscount(20, 25.99);

console.log(resultDiscount);



/* - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión */

function getLinkedWords(wordA, wordB) {
  return wordA + '-' + wordB;
}

const resultLinkedWords = getLinkedWords('lima', 'limón');

console.log(resultLinkedWords);



/* - Crea una función que reciba un número de kilómetros y los devuelva convertidos a metros. */

function getKmToMeters(km) {
  return km * 1000;
}

const resultKmToMeters = getKmToMeters(57);

console.log(resultKmToMeters);



/* - Crea una función que reciba un número de horas y las devuelva convertidas a segundos. */

function getHoursToSeconds(hour) {
  return hour * 3600;
}

const resultHoursToSeconds = getHoursToSeconds(2);

console.log(resultHoursToSeconds);




/* EJERCICIOS DE FUNCIONES DE FLECHA */

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

// versión larga

/* const getAverage2 = (numberA, numberB, numberC) => {
  return (numberA + numberB + numberC) / 3;
}

const resultAverage2 = getAverage2(2, 3, 4);

console.log(resultAverage2); */

// versión corta

const getAverage2 = (numberA, numberB, numberC) => (numberA + numberB + numberC) / 3;

const resultAverage2 = getAverage2(2, 3, 4);

console.log(resultAverage2);



/* - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio. */

// versión corta

const getDiscount2 = (discount, price) => price - (discount * price) / 100;

const resultDiscount2 = getDiscount2(20, 25.99);

console.log(resultDiscount2);



/* - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión */

const getLinkedWords2 = (wordA, wordB) => wordA + '-' + wordB;

const resultLinkedWords2 = getLinkedWords2('lima', 'limón');

console.log(resultLinkedWords2);



/* - Crea una función que reciba un número de kilómetros y los devuelva convertidos a metros. */

const getKmToMeters2 = km => km * 1000;

const resultKmToMeters2 = getKmToMeters2(57);

console.log(resultKmToMeters2);



/* - Crea una función que reciba un número de horas y las devuelva convertidas a segundos. */

const getHoursToSeconds2 = hour => hour * 3600;

const resultHoursToSeconds2 = getHoursToSeconds2(2);

console.log(resultHoursToSeconds2);
