/* TEORÍA BUCLES */

/* BUCLES FOR */

/* Partes de este bucle:

- Variable inicial: normalmente se nombra como i. Establece en qué valor se empieza

- Condición: siempre se tiene que dejar de cumplir en algún momento. La condición no es cuándo se deja de cumplir, es la condicion para que se ejecute

- Contador */
//siempre let

/* let counter = 0
const printValue = () => {
    if (counter < 5){
        console.log(counter)
    }

    counter++
}

printValue()
printValue()
printValue()
printValue()
printValue()
printValue()
printValue() */

for (let counter = 0; counter < 5; counter++) {
  console.log(counter);
}

/* BUCLES FOR OF */
//Sirve para sacar los valores uno a uno. Se usa para strings y arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let counter = 0; counter < numbers.length; counter++) {
  console.log(numbers[counter]);
}

//imprimir numbers[counter] saca cada uno de los valores del array uno debajo de otro. (Desde 1 hasta 8, en este caso)
//imprimir counter saca todas las vueltas que da el bucle. (Desde 0 hasta 7, en este caso)

//el código de arriba es el mismo que el de abajo
//siempre const

for (const number of numbers) {
  console.log(number);
}

const word = 'Tatiana';
for (const letter of word) {
  console.log(letter);
}

//
//
//

/* EJERCICIOS BUCLES */

/* Decide si necesitas usar el bucle for o el bucle for of en cada ejercicio */

/* - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0. */

const backwards = number => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};

backwards(5);

//
//
//

/* - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

const sumNumbers = numbers => {
  let total = 0; //esto es para almacenar la suma

  /*  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter]
  } */

  for (const number of numbers) {
    total = total + number;
  }

  console.log(total);
};

sumNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

//
//
//

/* - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

  4 x 0 = 0
  4 x 1 = 4
  4 x 2 = 8
  4 x 3 = 12
  4 x 4 = 16
  4 x 5 = 20
  4 x 6 = 24
  4 x 7 = 28
  4 x 8 = 32
  4 x 9 = 36
  4 x 10 = 40 */

const multiply = number => {
  for (
    let counter = 0;
    /*esto sobra porque ya está escrito en counter = 0: counter >= 0 && */ counter <= 10;
    counter++
  ) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiply(5);

//
//
//

/* - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

  4 x 10 = 40
  4 x 9 = 36
  4 x 8 = 32
  4 x 7 = 28
  4 x 6 = 24
  4 x 5 = 20
  4 x 4 = 16
  4 x 3 = 12
  4 x 2 = 8
  4 x 1 = 4
  4 x 0 = 0 */

const multiplyBackwards = number => {
  for (
    let counter = 10;
    counter >= 0 /*esto sobra porque ya está escrito en counter = 10: && counter <= 10 */;
    counter--
  ) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiplyBackwards(5);

//
//
//

/* - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años"
    ... */

/* const yearAge = (numberA, numberB) => {
  const yearBorn = numberA - numberB;
  console.log(`Naciste en el año ${yearBorn}`);
  for (let counteryear = yearBorn + 1; counteryear > yearBorn && counteryear <= numberA; counteryear++) {
    console.log(`En el año ${counteryear} cumpliste 1 año`);
  }

  for (let counterage = 0; counterage > 0 && counterage <= numberB; counterage++) {
    console.log(`cumpliste ${counterage} años`);
  }
};

yearAge(2024, 26); */

/* const yearAge = (year, age) => {
  const yearBorn = year - age;
  console.log(`Naciste en el año ${yearBorn}`);
  for (let counter = yearBorn + 1; counter <= year; counter++) {
    if (counter <= age){
      console.log(`En el año ${yearBorn[counter]} cumpliste 1 año`);
    }

  }

  for (let counterage = 0; counterage <= numberB; counterage++) {
    console.log(`cumpliste ${counterage} años`);
  }
};

yearAge(2024, 26); */

/* enfoque con el año */

/* const yearAge = (year, age) => {
  const yearBorn = year - age;
  console.log(`Naciste en el año ${yearBorn}`);

  for (let counter = 1; counter <= age; counter++) {
      console.log(`En el año ${yearBorn + counter} cumpliste ${counter} años`);
  }
};

yearAge(2024, 26); */

/* enfoque con la edad */

const yearAge = (year, age) => {
  const yearBorn = year - age;
  console.log(`Naciste en el año ${yearBorn}`);

  for (let counter = yearBorn + 1; counter <= year; counter++) {
    if (counter - yearBorn === 1) {
      /*otra opción más intuitiva: counter === yearBorn + 1 */ console.log(
        `En el año ${counter} cumpliste ${counter - yearBorn} año`
      );
    } else {
      console.log(`En el año ${counter} cumpliste ${counter - yearBorn} años`);
    }
  }
};

yearAge(2024, 26);

//
//
//

/* - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12. */

/* Versión número menor a número mayor */

/* const evenNumbers = (numberA, numberB) => {
  for (let counter = numberA; counter <= numberB; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};

evenNumbers(6, 14); */

/* Versión cualquier número */

const evenNumbers = (numberA, numberB) => {
  if (numberA > numberB) {
    for (let counter = numberB; counter <= numberA; counter++) {
      if (counter % 2 === 0) {
        console.log(counter);
      }
    }
  } else {
    for (let counter = numberA; counter <= numberB; counter++) {
      if (counter % 2 === 0) {
        console.log(counter);
      }
    }
  }
};

evenNumbers(60, 14);
evenNumbers(6, 14);

/* Corregido en clase */

/* Forma larga */

/* const evenNumbers = (numberA, numberB) => {
  
  if (numberA < numberB){
        for (let counter = numberA; counter <= numberB; counter++){
          if (counter % 2 === 0) {
            console.log(counter);
          }
        }
      } else{
        for (let counter = numberB; counter <= numberA; counter++){
          if (counter % 2 === 0) {
            console.log(counter);
          }
        }
      }
  };
  
  evenNumbers(60, 14);
  evenNumbers(6, 14); */

/* Forma corta */

/* const evenNumbers = (numberA, numberB) => {
  const start = Math.min(numberA, numberB);
  const end = Math.max(numberA, numberB);

  for (let counter = start; counter <= end; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};

evenNumbers(60, 14);
evenNumbers(6, 14);
 */

console.clear();

/* - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays. */

const repeatedNumbers = () => {
  const array1 = [];
  const array2 = [];

  for (let i = 0; i < 5; i++) {
    const randomNumberA = Math.floor(Math.random() * 11); //el 11 puede ser cualquier otro nº
    array1.push(randomNumberA);

    const randomNumberB = Math.floor(Math.random() * 11);
    array2.push(randomNumberB);
  }

  // con for

  /*   for (let i = 0; i < array1.length; i++) {
    const number = array2[i];

    if (array1.includes(number)) {
      console.log(`El número ${number} se repite`);
    }
  } */

  // con for of

  for (const number of array2) {
    if (array1.includes(number)) {
      console.log(`El número ${number} se repite`);
    }
  }

  console.log(array1);
  console.log(array2);
};

repeatedNumbers();

//
//
//

/* - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por sí mismo */

//los primos nunca son números pares
//por ej: el número 13 hay que dividirlo 11 veces hasta saber si es primo

const primeNumber = number => {
  if ((number % 2 === 0 && number !== 2) || number < 2) {
    console.log(`El número ${number} no es un número primo`);
    return;
  }

  for (let counter = 2; counter < number; counter++) {
    if (number % counter === 0) {
      console.log(`El número ${number} no es un número primo`);
      return;
    }
  }

  console.log(`El número ${number} es un número primo`);
};

primeNumber(13);
primeNumber(15);
primeNumber(2);
primeNumber(4);
primeNumber(1);

//
//
//

/* - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

const numberSquareCube = numbers => {
  /*   for (let counter = 0; counter < numbers.length; counter++) {
    const originalNumber = numbers[counter]; //esto sobra, equivale a number en el bucle for of
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Número: ${originalNumber} - Cuadrado: ${square} - Cubo: ${cube}`);
  } */

  for (const number of numbers) {
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Número: ${number} - Cuadrado: ${square} - Cubo: ${cube}`);
  }
};

numberSquareCube([2, 4, 5, 8, 9, 13, 18, 24, 35, 56]);

//
//
//

/* - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. */

/* const upperCaseVowels = word => {
  const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
  const resultVowelsInUpperCase = ''; */

/*   for (let counter = 0; counter < word.length; counter++) {
    if (vowels.includes(word[counter])) {
      console.log(word[counter].toUpperCase());
    }
  } */

/*   for (letter of word) {
    if (vowels.includes(letter)) {
      resultVowelsInUpperCase += letter.toUpperCase(); //resultVowelsInUpperCase = resultVowelsInUpperCase + letter.toUpperCase();
    } else {
      resultVowelsInUpperCase = resultVowelsInUpperCase + letter.toLowerCase();
    }
  }

  console.log(resultVowelsInUpperCase);
};

upperCaseVowels('zapatillas'); */

const vowelsToUpperCase = word => {
  const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
  let newWord = '';

  for (letter of word) {
    if (vowels.includes(letter)) {
      newWord = newWord + letter.toUpperCase();
    } else {
      newWord = newWord + letter.toLowerCase();
    }
  }

  console.log(newWord);
};

vowelsToUpperCase('zapatillas');

//
//
//

/* - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
  a: 3,
  e: 3,
  i: 1,
  o: 1,
  u: 1 */

const repeatedVowels = phrase => {
  //const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ'; esto no hace falta

  let aCounter = 0;
  let eCounter = 0;
  let iCounter = 0;
  let oCounter = 0;
  let uCounter = 0;

  for (const letter of phrase) {
    if (letter === 'a') {
      aCounter++;
    } else if (letter === 'e') {
      eCounter++;
    } else if (letter === 'i') {
      iCounter++;
    } else if (letter === 'o') {
      oCounter++;
    } else if (letter === 'u') {
      uCounter++;
    }
  }

  console.log(aCounter);
  console.log(eCounter);
  console.log(iCounter);
  console.log(oCounter);
  console.log(uCounter);
};

repeatedVowels('Enrique ordeña cabras');

//
//
//

/* - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa" */

/* const alternateLetters = (wordA, wordB) => {
  const shortestLength = Math.min(wordA.length, wordB.length);
  const newWord = '';

  for (let counter = 0; counter < shortestLength; counter++) {
    newWord += wordA[counter] + wordB[counter];
  }

  console.log(newWord);
};

alternateLetters('hola', 'adios'); */

const intercalateLetters = (wordA, wordB) => {
  const shortestLength = Math.min(wordA.length, wordB.length);
  let newWord = '';
  for (let i = 0; i < shortestLength; i++) {
    newWord += wordA[i] + wordB[i];
  }

  console.log(newWord);
};

intercalateLetters('perro', 'gato');

//
//
//

/* - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM" */

/* const reverseWord = word => {
  for (let counter = word.length - 1; counter >= 0; counter--) {
    console.log(word[counter]);
  }
};

reverseWord('Mariposas');
 */

const reverseWord = word => {
  let newWord = '';
  for (let counter = word.length - 1; counter >= 0; counter--) {
    newWord += word[counter];
  }

  console.log(newWord);
  console.log(word.split('').reverse().join(''));
};

reverseWord('Mariposas');

//
//
//

/* - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola. */

const evenOrOdd = numbers => {
  const even = [];
  const odd = [];
  const randomNumber110 = Math.floor(Math.random() * 11); //esto hay que ponerlo fuera del bucle

  /*   for (let counter = 0; counter < numbers.length; counter++) {
    const result = numbers[counter] * randomNumber110;
    if (result % 2 === 0) {
      even.push(result);
    } else {
      odd.push(result);
    }
  } */

  for (number of numbers) {
    const multiplyNumber = number * randomNumber110;
    if (multiplyNumber % 2 === 0) {
      even.push(multiplyNumber);
    } else {
      odd.push(multiplyNumber);
    }
  }

  console.log(numbers);
  console.log(even);
  console.log(odd);
};

evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//
//
//

/* - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'] */

// BUCLE FOR

/* const firstAndLastLetterInUpperCase = words => {
  const letters = [];

  for (let counter = 0; counter < words.length; counter++) {
    const firstLetter = words[counter].charAt(0).toUpperCase();
    const lastLetter = words[counter].charAt(words[counter].length - 1).toUpperCase();

    letters.push(firstLetter, lastLetter);
  }
  console.log(letters);
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']); */

// BUCLE FOR OF

const firstAndLastLetterInUpperCase = words => {
  const letters = [];

  for (const word of words) {
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();

    letters.push(firstLetter, lastLetter);
  }
  console.log(letters);
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']);

/* const firstAndLastLetterInUpperCase = words => {
  const firstLetterA = words[0].charAt(0).toUpperCase();
  const lastLetterA = words[0].charAt(words[0].length - 1).toUpperCase();
  const firstLetterB = words[1].charAt(0).toUpperCase();
  const lastLetterB = words[1].charAt(words[1].length - 1).toUpperCase();
  const firstLetterC = words[2].charAt(0).toUpperCase();
  const lastLetterC = words[2].charAt(words[2].length - 1).toUpperCase();

  const letters = [];
  letters.push(firstLetterA, lastLetterA, firstLetterB, lastLetterB, firstLetterC, lastLetterC);
  console.log(letters);
};

firstAndLastLetterInUpperCase(['hola', 'adios', 'gato']); */
