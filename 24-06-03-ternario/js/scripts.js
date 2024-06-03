/* OPERADOR TERNARIO */

const numberA = 8;
const numberB = 5;
if (numberA > numberB){
    console.log('A es mayor que B');
} else {
    console.log ('B es mayor que A');
}

//condición ? true : false
/* el ternario se usa cuando se tiene un if y luego un else, cuando es sencillo. */

//las líneas de aariba equivalen a esta línea de abajo

numberA > numberB ? console.log('A es mayor que B') : console.log ('B es mayor que A');



/* MATH */

/* Los objetos siempre van con la inicial en mayúscula. Después se pone un punto para acceder a la inf que queremos */


//lo que sale sugerido en azul son propiedades

console.log (Math.PI);
console.log (Math.E);

//lo que sale sugerido en morado son métodos. Siempre van entre paréntesis

//pow es para elevar un número
console.log (Math.pow(2, 3));

//round es para redondear un nº
console.log (Math.round(4.9));

//redondear hacia abajo
console.log (Math.floor(4.9));

//redondear hacia arriba
console.log (Math.ceil(4.9));

//genera un nº semialeatorio entre 0 y 1
console.log (Math.random());

//genera un nº semialeatorio entre 0 y 10
console.log (Math.random() * 11);

//
console.log (Math.floor(Math.random() * 5));


/* STRINGS */

/* Los strings solo tienen la propiedad de length */

const word1 = 'Hola';
console.log(word1.length);


/* charAt tiene índice 0, la primera letra es 0 */
const word2 = 'Hello';
console.log(word2.charAt(4));


/* siempre length -1 para obtener la última letra */
const word3 = 'Mesa';
console.log(word3.charAt(word3.length -1));

/* para saber si una palabra incluye algo */
const word4 = 'Monitor';
console.log(word4.includes('ni'));

/* si no encuentra algo devuelve -1 */
const word5 = 'Monitor';
console.log(word5.indexOf('m'));

/* para transformarlo a minúsculas */
const word6 = 'Monitor';
console.log(word6.toLowerCase());

/* para transformarlo a mayúsculas */
const word7 = 'Monitor';
console.log(word7.toUpperCase());


/* si empieza por */
const word8 = 'Monitor';
console.log(word8.startsWith('Mo'));


/* si termina en */
const word9 = 'Monitor';
console.log(word9.endsWith('or'));

/* para extrar un trozo de la cadena */
const word10 = 'Monitor';
console.log(word10.substring(3, 5));


/* para evitar escribirlo tan engorroso */
const name = 'Carlos';
const age = 23;

console.log('Hola ' + name + '. Tienes ' + age + ' años.');
console.log(`Hola ${name}. Tienes ${age} años.`);


/* EJERCICIOS CON STRINGS */

/* - Crea una función que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else */

const letters = (wordA) => {
if (wordA.length > 5){
    console.log (wordA.toUpperCase())
} else {
    console.log (wordA.toLowerCase())
}
}

letters('mesa');
letters('papelera');


/* - Repite el ejercicio anterior pero con un operador ternario. */

const letters2 = (wordA) => {
(wordA.length > 5)
      ?  console.log (wordA.toUpperCase())
 
      :  console.log (wordA.toLowerCase())

    }
    
    letters2('mesa');
    letters2('papelera');