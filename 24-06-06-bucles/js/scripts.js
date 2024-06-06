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

//el código de arriba es el mismo que el de abajo
//siempre const

for (const number of numbers) {
  console.log(number);
}

const word = 'Tatiana';
for (const letter of word) {
  console.log(letter);
}

/* EJERCICIOS BUCLES */
/* Decide si necesitas usar el bucle for o el bucle for of en cada ejercicio */

/* - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0. */

const backwards = number => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};

backwards(5);

/* - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

const sum = numbers => {
  for (let counter = numbers[0]; counter < numbers.length; counter++) {
    console.log(counter);
  }
};

sum([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]);
//almacenar la suma fuera

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
  for (let counter = 0; counter >= 0 && counter <= 10; counter++) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiply(5);

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
  for (let counter = 10; counter >= 0 && counter <= 10; counter--) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiplyBackwards(5);

/* - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años"
    ... */

const yearAge = (numberA, numberB) => {
  const yearBorn = numberA - numberB;
  console.log(`Naciste en el año ${yearBorn}`);
  for (let counteryear = yearBorn + 1; counteryear > yearBorn && counteryear <= numberA; counteryear++) {
    console.log(`En el año ${counteryear} cumpliste 1 año`);
  }

  for (let counterage = 0; counterage > 0 && counterage <= numberB; counterage++) {
    console.log(`cumpliste ${counterage} años`);
  }
};

yearAge(2024, 26);

/* - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12. */

const evenNumbers = (numberA, numberB) => {
  for (let counter = numberA; counter >= numberA && counter <= numberB; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};

evenNumbers(6, 14);

/* - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays. */

const repeatedNumbers = (array1, array2) => {};

repeatedNumbers([], []);

/* - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por sí mismo */

/* const primeNumber = number => {
  for (let counter =) {
    console.log(`${number} es un número primo`);
  }
    //console.log(`${number} no es un número primo`);

};

primeNumber(13);
primeNumber(4); */

/* - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

const numberSquareCube = numbers => {
  /*   for (let counter = 0; counter < numbers.length; counter++) {
    const originalNumber = numbers[counter];
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Número: ${originalNumber} - Cuadrado: ${square} - Cubo: ${cube}`);
  } */

  for (const number of numbers) {
    const originalNumber = numbers[number];
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Número: ${originalNumber} - Cuadrado: ${square} - Cubo: ${cube}`);
  }
};

numberSquareCube([2, 4, 5, 8, 9, 13, 18, 24, 35, 56]);

console.clear();

/* - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. */

const upperCaseVowels = word => {
  for (let counter = word[0]; counter <= word.lentgh; counter++) {
    const vowels = 'aeiouAEIOUáéíóú';
    console.log(word);
  }
};

upperCaseVowels('zapatillas');

/* - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
  a: 3,
  e: 3,
  i: 1,
  o: 1,
  u: 1 */
