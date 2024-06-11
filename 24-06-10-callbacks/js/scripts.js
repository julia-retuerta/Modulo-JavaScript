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

/* EJERCICIOS ARRAYS MÉTODOS CALLBACK */

/* Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array */

const multipliedByIndex = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

multipliedByIndex([2, 1, 3, 6, 5, 4]);

/* Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2 */

const dividedByIndex = numbers => {
  const result = numbers.map((number, index) => number / (index + 2));
  console.log(result);
};

dividedByIndex([3, 1, 8, 6, 5, 4]);

/* Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas. */

const wordsToUpperCase = words => {
  const result = words.map(word => word.toUpperCase());
  console.log(result);
};

wordsToUpperCase(['pantalla', 'ordenador', 'mesa']);

/* Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. */

const words = ['casa', 'coche', 'ventana'];
const letter = 'c';

const startWithLetter = (words, letter) => {
  if (words.startsWith(letter)) {
    const result = words.filter(word => word.startsWith(letter));
    console.log(result);
  } else {
    console.log('Ninguna palabra empieza por esa letra');
  }
};

/* Añade a la función anterior lo necesario para que funcione independientemente de mayúsculas o minúsculas. */

/* Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

const sum = numbers => {
  const result = numbers.reduce((acc, number) => acc + number);
  console.log(result);
};

sum([3, 1, 7, 6, 2, 4, 5, 9, 1, 6]);

console.clear();

/* Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8". */

const numberSquareCube = numbers => {
  numbers.forEach(number => {
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Número: ${number} - Cuadrado: ${square} - Cubo: ${cube}`);
  });
};

numberSquareCube([3, 1, 7, 6, 2, 4, 5, 9, 8, 10]);

/* Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. */

const word = 'television';
//split: para convertir un string en array
const result = word.split('').reduce((acc, letter) => {
  if ('aeiou'.includes(letter)) return acc + letter.toUpperCase();
  else return acc + letter;
}, '');

console.log(result);

/* Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola. */

const evenOrOdd = numbers => {
  const even = [];
  const odd = [];

  const randomNumber = Math.floor(Math.random() * 11);

  const result = numbers.map(number => number * randomNumber);
  console.log(numbers);
  console.log(even);
  console.log(odd);
};

evenOrOdd([3, 1, 7, 6, 2, 4, 5, 9, 8, 10]);
