/* ARRAYS */

/* const letters = ['a', 'b', 'c'];
console.log(letters);
console.log(letters[0].toUpperCase()); */


/* const letters = ['a', 'b', 'c'];
console.log(letters.length); */


/* const letters = ['a', 'b', 'c'];
console.log(letters.includes('c')); */

/* const letters = ['a', 'b', 'c'];
console.log(letters.indexOf('c')); */

//pop borra el último
/* 
const letters = ['a', 'b', 'c'];
console.log(letters);
letters.pop();
console.log(letters); */

//push mete datos al final
/* const letters = ['a', 'b', 'c'];
console.log(letters);
letters.push('d', 'e');
console.log(letters); */


//unshift mete datos al principio
/* const letters = ['a', 'b', 'c'];
console.log(letters);
letters.unshift('z', 'x');
console.log(letters); */

//nombres de los arrays en plural y nombres de los datos en singular

/* const printNumbers = numbers => {
    console.log(numbers);
}

printNumbers([1, 2, 3, 4, 5]) */


/* EJERCICIOS DE ARRAYS */

/* - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array. */

/* const randomNumber = numbers => {
    const number = Math.floor(Math.random() * numbers[]);
    console.log(number);
};

randomNumber([1, 2, 3, 4, 5]); */


/* 
- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */


const printNumbers = numbers => {
    const sum = numbers[0] + numbers[1] + numbers[2];
    console.log(`La suma de todos los números es ${sum}`);

    const average = sum / 3;
    console.log(`La media de todos los números es ${average}`)

    const highest = Math.max(numbers[0], numbers[1], numbers[2])
    const lowest = Math.min(numbers[0], numbers[1], numbers[2])
    console.log(`El mayor es ${highest} y el menor es ${lowest}`);
}

printNumbers([1, 2, 3]);


/* - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene. */


const containsNumber = numbers => {
const randomNumber010 = Math.floor(Math.random() * 10);
console.log(randomNumber010)
if (randomNumber010.includes(numbers)){

}
}

containsNumber([0, 2, 4, 7, 10]);