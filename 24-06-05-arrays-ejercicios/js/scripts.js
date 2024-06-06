/* EJERCICIOS DE ARRAYS */

/* - Crea una función que reciba un array de 5 números, imprime por consola el valor en una posición aleatoria del array. */

const randomNumber = numbers => {
  const randomPosition = Math.floor(Math.random() * numbers.length);
  console.log(numbers[randomPosition]);
};

randomNumber([1, 2, 3, 4, 5]);



/* 
- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */

const printNumbers = numbers => {
  const sum = numbers[0] + numbers[1] + numbers[2];
  console.log(`La suma de todos los números es ${sum}`);

  const average = sum / numbers.length;
  console.log(`La media de todos los números es ${average}`);

  const highest = Math.max(numbers[0], numbers[1], numbers[2]);
  const lowest = Math.min(numbers[0], numbers[1], numbers[2]);
  console.log(`El mayor es ${highest} y el menor es ${lowest}`);
};

printNumbers([1, 2, 3]);



/* - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene. */

const containsNumber = numbers => {
  const randomNumber010 = Math.floor(Math.random() * 11);
  //console.log(randomNumber010);
  const position = numbers.indexOf(randomNumber010); //devuelve la posición del value. Si no la encuentra, devuelve -1
  //console.log(position);
  if (position !== -1) {
    console.log(`El array contiene el número ${randomNumber010} y está en la posición ${position}`);
  } else {
    console.log(`El array no contiene el número ${randomNumber010}`);
  }
};

containsNumber([0, 2, 4, 7, 10]);

//mejor utilizar if y else para devolver true o false.


/* if (numbers.includes(randomNumber)) {
  console.log(`El número ${randomNumber} está en la posición ${numbers.indexOf(randomNumber)}`)
} */

/* - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100. */

const threeRandomNumbers = numbers => {
  const randomNumber0100 = Math.floor(Math.random() * 101);
  console.log(
    Math.floor(Math.random() * randomNumber0100),
    Math.floor(Math.random() * randomNumber0100),
    Math.floor(Math.random() * randomNumber0100)
  );
};

threeRandomNumbers([]);


/* const fillEmptyArray = emptyArray => {
  const randomNumber


  console.log(emptyArray);

  return emptyArray;
}

fillEmptyArray([]) */

console.clear(); //esto es para limpiar la consola y que muestre solo lo de abajo

/* - Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola. */

const threeEvenOdd = numbers => {
  const even = [];
  const odd = [];
  const randomNumber110 = Math.ceil(Math.random() * 10);

  const resultNumber = numbers[(0, 1, 2, 3, 4)] * Math.ceil(Math.random() * randomNumber110);
  //así con todos pero uno por uno

  if (resultNumber % 2 === 0) {
    even.push(resultNumber);
  } else {
    odd.push(resultNumber);
    //así con todos pero uno por uno
  }
  console.log('Array de 5 números: ', numbers);
  console.log('Even array: ', even);
  console.log('Odd array: ', odd);
};

threeEvenOdd([1, 2, 3, 4, 5]);




//numbers % 2 === 0

/*   numbers[0] * Math.ceil(Math.random() * randomNumber110),
    numbers[1] * Math.ceil(Math.random() * randomNumber110),
    numbers[2] * Math.ceil(Math.random() * randomNumber110),
    numbers[3] * Math.ceil(Math.random() * randomNumber110),
    numbers[4] * Math.ceil(Math.random() * randomNumber110); */



/* - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente. */

const dniLetter = number => {
  const letter = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];
  const positionLetter = number % 23;
  //console.log(positionLetter);
  const indexLetter = letter[positionLetter];
  //console.log(indexLetter);
  console.log(number + indexLetter);
};

dniLetter(63822549);



/* Forma simplificada */

/* const dniLetter = number => {
  const letter = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];

  const positionLetter = number % 23;
  console.log(number + letter[positionLetter]);
};

  dniLetter(63822549); */

/* - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O'] */

const initialLastUpperCase = words => {
  const firstWord = words[0];
  //console.log(firstWord);

  const secondWord = words[1];
  //console.log(secondWord);

  const thirdWord = words[2];
  //console.log(thirdWord);

  const firstLetterFirstWord = firstWord[0];
  //console.log(firstLetterFirstWord);

  const firstLetterSecondWord = secondWord[0];
  //console.log(firstLetterSecondWord);

  const firstLetterThirdWord = thirdWord[0];
  //console.log(firstLetterThirdWord);

  const lastLetterFirstWord = firstWord[firstWord.length - 1];
  //console.log(lastLetterFirstWord);

  const lastLetterSecondWord = secondWord[secondWord.length - 1];
  //console.log(lastLetterSecondWord);

  const lastLetterThirdWord = thirdWord[thirdWord.length - 1];
  //console.log(lastLetterThirdWord);

  console.log(
    firstLetterFirstWord.toUpperCase(),
    lastLetterFirstWord.toUpperCase(),
    firstLetterSecondWord.toUpperCase(),
    lastLetterSecondWord.toUpperCase(),
    firstLetterThirdWord.toUpperCase(),
    lastLetterThirdWord.toUpperCase()
  );
};

initialLastUpperCase(['hola', 'adios', 'gato']);


/* Forma simplificada */

const firstAndLastLetterInUpperCase = words => {
  const firstLetterA = words [0].charAt(0).toUpperCase();
  const lastLetterA = words [0].charAt(words[0].length -1).toUpperCase();
  //seguir con todas

  const letters = [];
  letters.push(firstLetterA, lastLetterA)
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato']);


/* Ejercicio clase operador ternario */

/* const returnExample = (a, b) => {
  const isGreater = a > b;

  if (isGreater){
    return true;
  } else {
    return false;
  }
}

returnExample(4, 9); */

const returnExample = (a, b) => a > b;

returnExample(4, 9);




