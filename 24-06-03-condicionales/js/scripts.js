//const numberA = 6;
//const numberB = '6';

//Hay que poner 3 iguales === para comparar valor y tipo
//console.log(numberA === numberB);

//console.log(Boolean('hola')); esto siempre va a devolver true.
// si el string está vacío ' ' da false.

//console.log(Boolean(9)); esto siempre va a devolver true.
// si el nº es 0 da false.

//console.log(Boolean(null)) esto siempre da false
//console.log(Boolean(undefined)) esto siempre da false

/* const number = 6;
const numberB = 98;

if(number === numberB){
    console.log('Son iguales');
} else{
    console.log('No son iguales');
} */

/* EJEMPLO CONDICIONAL MÚLTIPLE (&& ||) */

const a = 1;
const b = 10;
const c = 5;
const d = 8;

/* if(a < b && c < d){
    console.log('Todo ok');
} */

if ((d < a && b > c) || c < d) {
  console.log('Todo ok');
}

/* EJEMPLO APUNTES IF */

/* let number = 4;

if (number === 4) {
  console.log((number = 10));
}
if (number === 10) {
  console.log((number = 0));
} */

/* EJEMPLO APUNTES IF ELSE IF*/

let number = 4;

if (number === 4) {
  console.log((number = 10));
} else if (number === 10) {
  console.log((number = 0));
}

/* EJERCICIOS CONDICIONALES */

/* - Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos. */

function getAdult(name, age) {
/* if (age <= 0){
  console.log ('Edad incorrecta');
  return;
} */

  if (age < 18 && age >= 0) {
    console.log('Hola ' + name + ', eres' + ' menor de edad');
  } else if (age > 18) {
    console.log('Hola ' + name + ', eres' + ' mayor de edad');
  }
}

getAdult('Juan', 17);
getAdult('Cristina', 100);

/* - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor. */

function getHigher(numberA, numberB) {
/*   if (numberA === numberB){
    console.log ('Valores incorrectos');
    return;
  } */
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}

getHigher(10, 4);
getHigher(2, 8);

/* - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero. */

/* function getNumberType(numberC) {
  if (number === undefined){
    console.log('Valor incorrecto');
    return;
  }
  if (numberC > 0) {
    console.log(numberC + ' es un número positivo');
  } else if (numberC === 0) {
    console.log(numberC + ' es 0');
  } else {
    console.log(numberC + ' es un número negativo');
  }
}

getNumberType();
getNumberType(38);
getNumberType(0);
getNumberType(-56); */



function getNumberType2 (numberG){
  if (numberG < 0){
    console.log(numberG + ' es un número negativo');
    return; //esto lo añadimos para que deje de ejecutarse la función cuando se cumpla esta condición
  }
  if (numberG === 0){
    console.log(numberG + ' es cero');
    return;
  }
    console.log(numberG + ' es positivo'); //aquí no hace falta poner if, esto sería una mala práctica.
};

getNumberType2(-75);
getNumberType2(32);
getNumberType2(0);


/* - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor" */

/* function getScore(scoreA, scoreB, scoreC) {
  if ((scoreA + scoreB + scoreC) / 3 >= 0 && (scoreA + scoreB + scoreC) / 3 < 5) {
    console.log('Suspenso');
  } else if ((scoreA + scoreB + scoreC) / 3 >= 5 && (scoreA + scoreB + scoreC) / 3 < 8) {
    console.log('Aprobado');
  } else if ((scoreA + scoreB + scoreC) / 3 >= 8 && (scoreA + scoreB + scoreC) / 3 <= 10) {
    console.log('Matrícula de honor');
  }
}

getScore(0, 3, 4);
getScore(5, 7, 8);
getScore(8, 9, 9); */

/* Forma más fácil de hacerlo */

/* 

function getScore(scoreA, scoreB, scoreC) {
  if (scoreA < 0 || scoreA === undefined || scoreA > 10 || scoreB < 0 || scoreB === undefined || scoreB > 10 || scoreC < 0 || scoreC === undefined || scoreC > 10){
    console.log ('Datos incorrectos');
  }
  const average = (scoreA + scoreB + scoreC) / 3;
  if (average >= 0 && average < 5) {
    console.log('Suspenso');
  } else if (average >= 5 && average < 8) {
    console.log('Aprobado');
  } else if (average >= 8 && average <= 10) {
    console.log('Matrícula de honor');
  }
}

getScore(0, 3, 4);
getScore(5, 7, 8);
getScore(8, 9, 9); */

/* Forma aún más fácil de hacerlo */

/* const validateScore = (score) => {
  if(score < 0 || score === undefined || score > 10){
    return true;
  }
  return false;
}

const getScore = (scoreA, scoreB, scoreC) => {
  if (validateScore (scoreA) || validateScore (scoreB) || validateScore (scoreC)){
    console.log ('Datos incorrectos');
    return;
  }
  const average = (scoreA + scoreB + scoreC) / 3;
  if (average >= 0 && average < 5) {
    console.log('Suspenso');
  } else if (average >= 5 && average < 8) {
    console.log('Aprobado');
  } else if (average >= 8 && average <= 10) {
    console.log('Matrícula de honor');
  }
}

getScore(0, 3, 4);
getScore(5, 7, 8);
getScore(8, 9, 9); */


/* Forma aún más y más fácil de hacerlo */

/* const validateScore = score => {
  return score < 0 || score === undefined || score > 10
}

const getScore = (scoreA, scoreB, scoreC) => {
  if (validateScore (scoreA) || validateScore (scoreB) || validateScore (scoreC)){
    console.log ('Datos incorrectos');
    return;
  }
  const average = (scoreA + scoreB + scoreC) / 3;
  if (average >= 0 && average < 5) {
    console.log('Suspenso');
  } else if (average >= 5 && average < 8) {
    console.log('Aprobado');
  } else if (average >= 8 && average <= 10) {
    console.log('Matrícula de honor');
  }
}

getScore(0, 3, 4);
getScore(5, 7, 8);
getScore(8, 9, 9); */

/* Forma aún más y más fácil de hacerlo */

const validateScore = score =>  score < 0 || score === undefined || score > 10

const getScore = (scoreA, scoreB, scoreC) => {
  if (validateScore (scoreA) || validateScore (scoreB) || validateScore (scoreC)){
    console.log ('Datos incorrectos');
    return;
  }
  const average = (scoreA + scoreB + scoreC) / 3;
  if (average >= 0 && average < 5) {
    console.log('Suspenso');
  } else if (average >= 5 && average < 8) {
    console.log('Aprobado');
  } else if (average >= 8 && average <= 10) {
    console.log('Matrícula de honor');
  }
}

getScore(0, 3, 4);
getScore(5, 7, 8);
getScore(8, 9, 9);



/* - Crea una función que reciba tres números y devuelva el mayor de ellos. */

function getHigher2(numberD, numberE, numberF) {
  if (numberD > numberE && numberD > numberF) {
    console.log(numberD);
  } else if (numberE > numberD && numberE > numberF) {
    console.log(numberE);
  } else if (numberF > numberD && numberF > numberE) {
    console.log(numberF);
  } else {
    console.log ('Algunos valores son iguales');
  }
}

getHigher2(93, 13, 74);
getHigher2(51, 70, 28);
getHigher2(56, 20, 34);



/* - Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número. */

/* function getDivisibleBy(integerA) */ /* =>  le añadió las flechas a todas las funciones y en vez de function puso const. Esta forma es mejor que function porque más adelante si no dará problemas*/ /*{
   if (integerA % 3 === 0 && integerA % 5 === 0) {
    console.log('Es divisible por 3 y por 5');
  } else if (integerA % 5 === 0) {
    console.log('Es divisible por 5');
  } else if (integerA % 3 === 0) {
    console.log('Es divisible por 3');
  } else {
    console.log(integerA);
  }
}

getDivisibleBy(-30);
getDivisibleBy(6);
getDivisibleBy(25);
getDivisibleBy(-49); */

function getDivisibleBy(integerA) {
  if (integerA % 3 === 0 && integerA % 5 === 0) {
    return 'Es divisible por 3 y por 5';
  } else if (integerA % 5 === 0) {
   return 'Es divisible por 5';
  } else if (integerA % 3 === 0) {
    console.log('Es divisible por 3');
  } else {
    return integerA;
  }
}

const divisible = getDivisibleBy(15);
console.log(divisible);



/* - Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado. */

function evenOdd(integerB) {
  if (integerB % 2 === 0) {
    console.log('Es un número par');
  } else {
    console.log('Es un número impar');
  }
}

evenOdd(2);
evenOdd(3);



/* - Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado */

function leap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log('Es un año bisiesto');
  } else {
    console.log('No es un año bisiesto');
  }
}

leap(1980);
leap(1991);
leap(2000);
leap(2023);



/* - Crea una función que reciba dos valores y los sume, la función debe sumar los valores aunque se los mandemos en formato string y SÓLO debe convertirlos a number si llegan como string. */

const sumNumbers = (numberH, numberI) => {
  if (typeof numberH === 'string'){
    numberH = Number (numberH);
  }
  if (typeof numberI === 'string'){
    numberI = Number (numberI);
  }

  console.log (numberH + numberI);
};

sumNumbers(3, '8');