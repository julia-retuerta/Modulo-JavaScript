/* EJERCICIOS ARRAYS MÉTODOS CALLBACK */

/* Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array */

const multipliedByIndex = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

multipliedByIndex([2, 1, 3, 6, 5, 7]);

//
//
//

/* Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2 */

const dividedByIndex = numbers => {
  const result = numbers.map((number, index) => number / (index + 2));
  console.log(result);
};

dividedByIndex([3, 1, 8, 6, 5, 4]);

//
//
//

/* Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas. */

const wordsToUpperCase = words => {
  const result = words.map(word => word.toUpperCase());
  console.log(result);
};

wordsToUpperCase(['pantalla', 'ordenador', 'mesa']);

//
//
//

/* Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. */

// MI RESOLUCIÓN

/* 
const words = ['casa', 'coche', 'ventana'];
const letter = 'c';

const startsWithLetter = (words, letter) => {
  const result = words.filter(word => word.startsWith(letter));

  if (word.startsWith(letter)) {
    console.log(result);
  } else {
    console.log(`No hay ninguna palabra que empiece por la letra ${letter}`);
  }
};

startsWithLetter(words, letter); */

// RESOLUCIÓN EN CLASE

const startsWithLetter2 = (words, letter) => {
  const result = words.filter(word => word.startsWith(letter));

  if (result.length === 0) {
    console.log(`No hay ninguna palabra que empiece por la letra ${letter}`);
    return;
  }

  console.log(result);
};

startsWithLetter2(['casa', 'coche', 'ventana'], 'c');

//
//
//

/* Añade a la función anterior lo necesario para que funcione independientemente de mayúsculas o minúsculas. */

// RESOLUCIÓN EN CLASE

const startsWithLetter3 = (words, letter) => {
  const result = words.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));

  if (result.length === 0) {
    console.log(`No hay ninguna palabra que empiece por la letra ${letter}`);
    return;
  }

  console.log(result);
};

startsWithLetter3(['casa', 'coche', 'ventana'], 'C');

//
//
//

/* Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

const sum = numbers => {
  const result = numbers.reduce((acc, number) => acc + number);
  console.log(result);
};

sum([3, 1, 7, 6, 2, 4, 5, 9, 1, 6]);

//
//
//

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

//
//
//

/* Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. */

// Reduce solo funciona con arrays. Primero hay que convertir la palabra a un array utilizando split y luego ya se puede escribir reduce. También hay que especificar que empiece con string vacío porque si no, no tiene en cuenta la primera letra. El string vacío es el valor inicial del acumulador.

const vowelsInUpperCase = word => {
  const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';

  const result = word.split('').reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      return acc + letter.toUpperCase();
    } else {
      return acc + letter.toLowerCase();
    }
  }, '');

  console.log(result);
};

vowelsInUpperCase('televisión');
vowelsInUpperCase('armario');

// RESOLUCIÓN EN CLASE FORMA CORTA

/* const vowelsInUpperCase = word => {
  const result = word.split('').reduce((acc, letter) => {
    if ('aeiou'.includes(letter)) return acc + letter.toUpperCase();
    else return acc + letter;
  }, '');

  console.log(result);
};

vowelsInUpperCase('television'); */

//
//
//

/* Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola. */

// MI RESOLUCIÓN

/* const evenOrOdd = numbers => {
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

evenOrOdd([3, 1, 7, 6, 2, 4, 5, 9, 8, 10]); */

// no se puede hacer con push porque push es imperativo y no es recomendable utilizarlo con callbacks

// RESOLUCIÓN EN CLASE

const evenOrOdd = numbers => {
  const randomNumber = Math.floor(Math.random() * 11);

  const arrayResult = numbers.map(number => number * randomNumber);

  const even = arrayResult.filter(number => number % 2 === 0);
  const odd = arrayResult.filter(number => number % 2 !== 0);

  console.log(numbers, even, odd);
};

evenOrOdd([3, 1, 7, 6, 2, 4, 5, 9, 8, 10]);

//
//
//

/* Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat() */

// MI RESOLUCIÓN

/* const firstAndLastLetterInUpperCase = words => {
  const result = words.flatMap(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();
  });

  console.log(result);
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']); */

// RESOLUCIÓN EN CLASE

const firstAndLastLetterInUpperCase = words => {
  const result = words.flatMap(word => {
    return [word.charAt(0).toUpperCase(), word.charAt(word.length - 1).toUpperCase()];
  });

  console.log(result);
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']);

//
//
//

/* Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5. */

// MI RESOLUCIÓN

/* const higherThan5 = numbers => {
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

higherThan5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); */

// RESOLUCIÓN EN CLASE
// Hay que usar some

const higherThan5 = numbers => {
  const result = numbers.some(number => number > 5);
  console.log(result);
};

higherThan5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//
//
//

/* Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa'] */

const wordsWithLength = (words, length) => {
  const result = words.filter(word => word.length === length);
  console.log(result);
};

wordsWithLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

//
//
//

/* Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número */

const array = [1, 2, 3, 4, 5];
const divisor = 2;

const divisorNumbers = (array, divisor) => {
  const result = array.filter(number => number % divisor === 0);
  console.log(result);
};

divisorNumbers(array, divisor);

//
//
//

/* Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30. */

const array2 = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const under30 = array2 => {
  const result = array2.filter(user => user.age < 30);
  console.log(result);
};

under30(array2);

//
//
//

/* Crea una función que reciba un array relleno con números y te diga si todos son pares o no. */

const allEvenOrNot = numbers => {
  const result = numbers.every(number => number % 2 === 0);
  console.log(result);
};

allEvenOrNot([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
allEvenOrNot([2, 4, 6, 8, 10]);

//
//
//

/* Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor. */

const shortestToLongest = words => {
  const result = words.sort((a, b) => a.length - b.length);

  console.log(result);
};

shortestToLongest(['vaso', 'monedero', 'lápiz', 'papel', 'rotulador']);

//
//
//

/* Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight) */

const reverseWord = word => {
  const result = word.split('').reduceRight((acc, letter) => acc + letter);
  console.log(result);
};

reverseWord('Mariposas');

//
//
//

// RETOS

/* Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los dígitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10] */

/* const sumDigits = numbers => {
  const result = numbers.map => {
    const stringNumbers = String(number);
    const sum = stringNumbers
  }
  console.log(result);
};

sumDigits([21, 34, 87, 10, 28]); */

// RESOLUCIÓN EN CLASE

const sumDigits = numbers => {
  const sumArray = numbers.map(number => {
    const stringNumbers = String(number);
    const sum = stringNumbers.split('').reduce((acc, number) => acc + Number(number), 0);
    return sum;
  });
  console.log(sumArray);
};

sumDigits([21, 34, 87, 10, 28]);

//
//
//

/* Utilizando el array que te dejo a continuación, resuelve estos dos retos. */

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

/* - Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad. */

// RESOLUCIÓN EN CLASE

const orderArrayByCondition = condition => {
  users.sort((a, b) => a[condition] - b[condition]);
  console.log(users);
};

orderArrayByCondition('name');
orderArrayByCondition('surname');
orderArrayByCondition('age');

/* - Crea una función que reciba un id de usuario y borre ese usuario del array. */

// RESOLUCIÓN EN CLASE

const deleteUser = id => {
  const result = users.filter(user => user.id !== id);
  console.log(result);
};

deleteUser('user005');
