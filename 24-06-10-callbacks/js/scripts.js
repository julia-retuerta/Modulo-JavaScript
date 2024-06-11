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

//
//

/* EJERCICIOS ARRAYS MÉTODOS CALLBACK */

/* Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array */

const multipliedByIndex = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

multipliedByIndex([2, 1, 3, 6, 5, 7]);

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

/* const words = ['casa', 'coche', 'ventana'];
const letter = 'c';

const startsWithLetter = (words, letter) => {
  const result = words.filter(word => word.startsWith(letter));

  if (words.startsWith(letter)) {
    console.log(result);
  } else {
    console.log('Ninguna palabra empieza por esa letra');
  }
};

startsWithLetter(words, letter); */

/* Añade a la función anterior lo necesario para que funcione independientemente de mayúsculas o minúsculas. */

/* Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

const sum = numbers => {
  const result = numbers.reduce((acc, number) => acc + number);
  console.log(result);
};

sum([3, 1, 7, 6, 2, 4, 5, 9, 1, 6]);

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

  const result = numbers.forEach(number => number * randomNumber);

  if (result % 2 === 0) {
    even.push(result);
  } else {
    odd.push(result);
  }

  console.log(numbers);
  console.log(even);
  console.log(odd);
};

evenOrOdd([3, 1, 7, 6, 2, 4, 5, 9, 8, 10]);

/* Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat() */

/* const firstAndLastLetterInUpperCase = words => {
  const result = words.flatMap(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();
    result.push(firstLetter, lastLetter);
  });

  console.log(result);
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']); */

console.clear();

/* Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5. */

const higherThan5 = numbers => {
  numbers.forEach(number => {
    if (number > 5) {
      console.log(`El número ${number} es mayor de 5`);
    } else if (number === 5) {
      console.log(`El número ${number} es 5`);
    } else {
      console.log(`El número ${number} es menor de 5`);
    }
  });
};

higherThan5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa'] */

const wordsWithLength = (words, length) => {
  const result = words.filter(word => word.length === length);
  console.log(result);
};

wordsWithLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

/* Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número */

const array = [1, 2, 3, 4, 5];
const divisor = 2;

const divisorNumbers = (array, divisor) => {
  const result = array.filter(number => number % divisor === 0);
  console.log(result);
};

divisorNumbers(array, divisor);

/* Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30. */

const array2 = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const under30 = array2 => {
  const result = array2.filter(age => age < 30);
  console.log(result);
};

under30(array2);

/* Crea una función que reciba un array relleno con números y te diga si todos son pares o no. */

const allEvenOrNot = numbers => {
  const result = numbers.every(number => number % 2 === 0);
  console.log(result);
};

allEvenOrNot([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
allEvenOrNot([2, 4, 6, 8, 10]);

/* Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor. */

const shortestToLongest = words => {
  const result = words.sort((a, b) => a.length - b.length);

  console.log(result);
};

shortestToLongest(['vaso', 'monedero', 'lápiz', 'papel', 'rotulador']);

/* Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight) */

const reverseWord = word => {
  const result = word.split('').reduceRight((acc, letter) => acc + letter);
  console.log(result);
};

reverseWord('Mariposas');

/* Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los dígitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10] */

/* const sumDigits = numbers => {
  const result = numbers.map => 
  console.log(result);
};

sumDigits([3, 7, 15, 1, 10]); */

/* Utilizando el array que te dejo a continuación resuelve estos dos retos.

  - Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad.

  - Crea una función que reciba un id de usuario y borre ese usuario del array.*/

const users = [
  {
    id: 'user001',
    name: 'Juan',
    surname: 'Pérez',
    age: 30
  },
  {
    id: 'user002',
    name: 'María',
    surname: 'González',
    age: 25
  },
  {
    id: 'user003',
    name: 'Pedro',
    surname: 'Sánchez',
    age: 35
  },
  {
    id: 'user004',
    name: 'Ana',
    surname: 'Martínez',
    age: 28
  },
  {
    id: 'user005',
    name: 'Luis',
    surname: 'López',
    age: 40
  }
];
