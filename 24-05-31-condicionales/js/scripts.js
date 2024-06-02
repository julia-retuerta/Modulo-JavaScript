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
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}

getHigher(10, 4);
getHigher(2, 8);

/* - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero. */

function getNumberType(numberC) {
  if (numberC > 0) {
    console.log(numberC + ' es un número positivo');
  } else if (numberC === 0) {
    console.log(numberC + ' es 0');
  } else {
    console.log(numberC + ' es un número negativo');
  }
}

getNumberType(38);
getNumberType(0);
getNumberType(-56);

/* - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor" */

function getScore(scoreA, scoreB, scoreC) {
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
getScore(8, 9, 9);

/* - Crea una función que reciba tres números y devuelva el mayor de ellos. */

function getHigher2(numberD, numberE, numberF) {
  if (numberD > numberE && numberD > numberF) {
    console.log(numberD);
  } else if (numberE > numberD && numberE > numberF) {
    console.log(numberE);
  } else {
    console.log(numberF);
  }
}

getHigher2(93, 13, 74);
getHigher2(51, 70, 28);
getHigher2(56, 20, 34);

/* - Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número. */

function getDivisibleBy(integerA) {
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
getDivisibleBy(-49);

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
