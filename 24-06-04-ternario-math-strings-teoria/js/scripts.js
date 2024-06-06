/* OPERADOR TERNARIO */

const numberA = 8;
const numberB = 5;
if (numberA > numberB) {
  console.log('A es mayor que B');
} else {
  console.log('B es mayor que A');
}

//condición ? true : false
/* el ternario se usa cuando se tiene un if y luego un else, cuando es sencillo. */

//las líneas de aariba equivalen a esta línea de abajo

numberA > numberB ? console.log('A es mayor que B') : console.log('B es mayor que A');

/* MATH */

/* Los objetos siempre van con la inicial en mayúscula. Después se pone un punto para acceder a la inf que queremos */

//lo que sale sugerido en azul son propiedades

console.log(Math.PI);
console.log(Math.E);

//lo que sale sugerido en morado son métodos. Siempre van entre paréntesis

//pow es para elevar un número
console.log(Math.pow(2, 3));

//round es para redondear un nº al entero más cercano
console.log(Math.round(4.9));

//floor es para redondear hacia abajo
console.log(Math.floor(4.9));

//ceil es para redondear hacia arriba
console.log(Math.ceil(4.9));

//random genera un nº semialeatorio entre 0 y 1
console.log(Math.random());

//genera un nº semialeatorio entre 0 y 10
console.log(Math.random() * 11);

//genera un nº semialeatorio entre 0 y 5 y lo redondea hacia abajo
console.log(Math.floor(Math.random() * 5));

/* STRINGS */

/* Los strings solo tienen la propiedad de length */

const word1 = 'Hola';
console.log(word1.length);

/* El resto de cosas que tienen son métodos y de esos hay unos cuantos, a diferencia de la propiedad length */

/* charAt es para saber qué letra está en cierta posición. charAt tiene índice 0, es decir, que la primera letra que cuenta siempre es 0 */
const word2 = 'Hello';
console.log(word2.charAt(4));

/* siempre se escribe length -1 para obtener la última letra de un string */
const word3 = 'Mesa';
console.log(word3.charAt(word3.length - 1));

/* includes es para saber si una palabra incluye los caracteres que se buscan. Responde con true o false */
const word4 = 'Monitor';
console.log(word4.includes('ni'));

/* indexOf es para que diga en qué posición se encuentra una letra. Si no encuentra nada devuelve -1 */
const word5 = 'Monitor';
console.log(word5.indexOf('m'));

/* toLowerCase es para transformar un string a minúsculas */
const word6 = 'Monitor';
console.log(word6.toLowerCase());

/* toUpperCase es para transformar un string a mayúsculas */
const word7 = 'Monitor';
console.log(word7.toUpperCase());

/* startsWith es para saber si un string empieza por. Devuelve true o false */
const word8 = 'Monitor';
console.log(word8.startsWith('Mo'));

/* endsWith es para saber si un string termina en. Devuelve true o false */
const word9 = 'Monitor';
console.log(word9.endsWith('or'));

/* substring es para extraer un trozo de la cadena */
const word10 = 'Monitor';
console.log(word10.substring(3, 5));

/* estas comillas `` sirven para evitar escribir un texto de manera tan complicada */
const name = 'Carlos';
const age = 23;

console.log('Hola ' + name + '. Tienes ' + age + ' años.');
console.log(`Hola ${name}. Tienes ${age} años.`);

/* TEORÍA 4 JUNIO 2024 */

//esto va a salir en minúsculas. No se modifica la cadena original
const word = 'hola';
word.toUpperCase();
console.log(word);

//esto sale en mayúsculas
const wordTwo = 'hola';
console.log(wordTwo.toUpperCase());
