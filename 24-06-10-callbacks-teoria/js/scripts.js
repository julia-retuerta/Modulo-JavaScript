/* CALLBACKS */

const printResult = value => {
  console.log(value);
};

const sumNumbers = (a, b, callback) => {
  const result = a + b;

  callback(result);
};

sumNumbers(3, 5, printResult);

/* const word= 'ordenador'
//split: para convertir un string en array
const result = word.split('').reduce((acc, letter) => {
if ('aeiou'.includes(letter)) return acc + letter.toUpperCase();
  else return acc + letter;
}, '');

console.log(result) */

//const result = words.map(word => word.toUpperCase())

//el callback es una función que va a ejecutar otra función
//en este ej callback es printResult

// CB MAP FOR EACH

/* const arrayExample = ['a', 'b', 'c'];

const callback = (value, index, array) => {
  console.log(value);
  console.log(index); //esto es equivalente a i o counter. Para obtener el index hay que obtener también el valor, siempre
};

arrayExample.forEach(callback); */

//forma correcta de escribirlo:

const arrayExample = ['a', 'b', 'c'];

/* arrayExample.forEach((value, index) => {
  console.log(value + ' - ' + index);
}); */

//el for each no devuelve nada. Para guardar un resultado hay que utilizar cualquier cosa menos for each

const resultForEach = arrayExample.forEach(letter => {
  return letter.toUpperCase();
});

// CB MAP

arrayExample.map((value, index) => {
  console.log(value + ' - ' + index);
});

const resultMap = arrayExample.map(letter => {
  return letter.toUpperCase();
});
//esto da como resultado un array con las letras en mayúsculas

//lo de arriba sería lo mismo que esto:

const resultMap2 = [];
for (const letter of arrayExample) {
  resultMap2.push(letter.toUpperCase());
}

console.log(resultForEach);
console.log(resultMap);

// CB FILTER

const numbers = [2, 1, 3, 6, 5, 4];

// manera antigua de hacerlo
/* const even = [];

for (const number of numbers) {
  if (number % 2 === 0){
    even.push(number);
  }
}

console.log(even); */

//con cb filter
//sería necesario guardarlo
const even = numbers.filter(number => number % 2 === 0);
console.log(even);

// CB EVERY

const areAllEven = numbers.every(number => number % 2 === 0);
console.log(areAllEven);

// CB SOME

const areSomeEven = numbers.some(number => number % 2 === 0);
console.log(areSomeEven);

// CB FIND

// Si no encuentra lo que estás buscando devuelve undefined
// También existe findIndex pero no se suele usar

const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven);

// CB SORT

// Ordena arrays. Funciona comparando por parejas

// esto es para enteneder cómo funciona
numbers.sort((a, b) => console.log(a + '-' + b));

// a es el segundo número y b es el primer número
// esto es para ordenar de menor a mayor
numbers.sort((a, b) => a - b);
console.log(numbers);

// esto es para ordenar de mayor a menor
numbers.sort((a, b) => b - a);
console.log(numbers);

// cb sort con strings

const names = ['César', 'Ángel', 'Laura', 'Carlos', 'Adrián'];

// manera desglosada
names.sort((a, b) => {
  if (b > a) return -1;
  if (b < a) return 1;
  return 0;
});

// manera más eficiente: utilizando localeCompare, que es solo para strings. Este método solo tiene en cuenta el alfabeto, sin pensar en mayúsculas, minúsculas, tildes...
// para ordenar en orden alfabético

names.sort((a, b) => a.localeCompare(b));

console.log(names);

// CB REDUCE

// Este método sirve para sumar todos los valores de un array, Sirve para números y strings

/* let total = 0;

for (const number of numbers) {
  total += number;
}

console.log(total); */

const total = numbers.reduce((total, number) => total + number);
console.log(total);

// Opcionalmente se puede añadir el valor por el que empieza a contar: 1 o 0 generalmente. Por defecto es 0
/* const total = numbers.reduce((total, number) => total * number, 1);
console.log(total); */
