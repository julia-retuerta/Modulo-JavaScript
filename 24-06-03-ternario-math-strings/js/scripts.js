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





/* EJERCICIOS CON STRINGS */

/* - Crea una función que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else */

const letters = wordA => {
  if (wordA.length >= 5) {
    console.log(wordA.toUpperCase());
  } else {
    console.log(wordA.toLowerCase());
  }
};

letters('mesa');
letters('papel');


/* - Repite el ejercicio anterior pero con un operador ternario. */

const letters2 = wordA => {
  wordA.length > 5 ? console.log(wordA.toUpperCase()) : console.log(wordA.toLowerCase());
};

letters2('mesa');
letters2('papelera');


/* - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación". */

const validateVerb = verb => {
  if (verb.endsWith('ar')) {
    return `primera conjugación`;
  } else if (verb.endsWith('er')) {
    return `segunda conjugación`;
  } else {
    return `tercera conjugación`;
  }
};

const twoVerbs = (verbA, verbB) => {
  console.log(`El verbo ${verbA} es de la ${validateVerb} y el verbo ${verbB} es de la ${validateVerb}`);
};

twoVerbs('viajar', 'cocinar');
twoVerbs('estudiar', 'leer');
twoVerbs('beber', 'comer');
twoVerbs('ver', 'vivir');
twoVerbs('escribir', 'abrir');


/* - Crear una función llamada generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". */

const generateWord = (wordC, wordD, wordE) => {
  console.log(wordC.substring(3, 5) + wordD.substring(0, 2) + wordE.substring(1, 3));
};

generateWord('ordenador', 'vaso', 'estuche');


/* - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". */

const indexAt = at => {
  console.log(at.indexOf('@'));
};

indexAt('julia@gmail.com');

const indexDomain = domain => {
  console.log(domain.substring(5));
};


/* - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra. */

const printLetter = wordF => {
  console.log(wordF.charAt(1));
};

printLetter('teclado');


/* - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs */

const upperLowerCase = word5Letters => {
  if (word5Letters.length !== 5) {
    console.log('Esta palabra no tiene 5 letras.');
    return;
  }
};

upperLowerCase('piano');


/* - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87". */

const userName = (name, surname) => {
  return name.charAt(0) + surname + Math.round(Math.random() * 101);
};

const user = userName('Natalia', 'Fernández');
console.log(user);
