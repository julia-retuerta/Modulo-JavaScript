/* TEORÍA ARRAYS */

/* const letters = ['a', 'b', 'c'];
console.log(letters);
console.log(letters[0].toUpperCase()); */

//length
/* const letters = ['a', 'b', 'c'];
console.log(letters.length); */

//includes
/* const letters = ['a', 'b', 'c'];
console.log(letters.includes('c')); */

//indexOf
/* const letters = ['a', 'b', 'c'];
console.log(letters.indexOf('c')); */

//pop borra el último
/* 
const letters = ['a', 'b', 'c'];
console.log(letters);
letters.pop();
console.log(letters); */

//push mete datos al final
/* El método push en JavaScript agrega uno o más elementos al final de un array y devuelve la nueva longitud del array. No devuelve el elemento que se agregó. */
let array = [];
let newLength = array.push(10);
console.log(newLength); // Imprime 1, porque ahora el array tiene 1 elemento
console.log(array); // Imprime [10], que es el contenido del array

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
