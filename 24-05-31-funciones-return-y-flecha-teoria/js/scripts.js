/* RETORNO DE UNA FUNCIÓN */

/* Multiplicación de un número por 2 */

function getDoubleValue(number) {
  const double = number * 2;
  return double;
}

const resultDoubleValue = getDoubleValue(8);

console.log(resultDoubleValue);

/* Suma de 2 números */

function getSum(numberA, numberB) {
  const total = numberA + numberB;
  return total;
}

const result = getSum(8, 8);

console.log(result);

/* Suma de 2 números */

function getSum(numberC, numberD) {
  return numberC + numberD;
}

const resultSum = getSum(8, 8);

console.log(resultSum);



/* FUNCIONES DE FLECHA */

/* function pasarlo a const
= parámetros
añadir flecha => */

const getSum2 = (numberA, numberB) => {
  console.log(numberA + numberB);
};

getSum2(5, 8);

/* const doubleNumber = number => {
    return number * 2;
}; */

//esto de aquí arriba es lo mismo que esto:

const doubleNumber = number => number * 2;

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

/* const getAverage2 = (numberA, numberB, numberC) => {
  const resultAverage = (numberA + numberB + numberC) / 3;
  return resultAverage;
}; */

/* 
const average = getAverage2(2, 3, 4);
console.log(average); */
