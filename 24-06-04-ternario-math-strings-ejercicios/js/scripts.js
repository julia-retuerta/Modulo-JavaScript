/* EJERCICIOS CON STRINGS */

/* - Crea una función que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else */

const letters = wordA => {
  if (wordA.length > 5) {
    console.log(wordA.toUpperCase());
  } else {
    console.log(wordA.toLowerCase());
  }
};

letters('mesa');
letters('papel');
letters('estuche');



/* - Repite el ejercicio anterior pero con un operador ternario. */

const letters2 = wordA => {
  wordA.length > 5 ? console.log(wordA.toUpperCase()) : console.log(wordA.toLowerCase());
};

letters2('mesa');
letters2('papel');
letters2('estuche');



/* - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación". */

const validateVerb = verb => {
  if (verb.endsWith('ar')) {
    return 'primera conjugación';
  }

  /* else */ if (verb.endsWith('er')) {
    return 'segunda conjugación';
  }

  /* else */ if (verb.endsWith('ir')) {
    return 'tercera conjugación';
  }

  return 'verbo incorrecto';
};

const twoVerbs = (verbA, verbB) => {
  console.log(`El verbo ${verbA} es de la ${validateVerb(verbA)} y el verbo ${verbB} es de la ${validateVerb(verbB)}`);
};

twoVerbs('viajar', 'cocinar');
twoVerbs('estudiar', 'leer');
twoVerbs('beber', 'comer');
twoVerbs('ver', 'vivir');
twoVerbs('escribir', 'abrir');



/* Resolución en clase */

/* Esta es la versión larga que no hay que hacer porque si se introdujera otro parámetro, aumentarían las posibilidades exponencialmente */

/* const getConjugation = (verb1, verb2) => {
  if(verb1.endsWith('ar') && verb2.endsWith('ar')){
    console.log(`El verbo ${verb1} es de la primera conjugación y el verbo ${verb2} es de la primera conjugación`)
  }
  // y así sucesivamente...
} */

/* Esta es una resolución optimizada */

/* const validateVerb = verb => {
  if (verb.endsWith('ar')) {
    return 'primera conjugación';
  } else if (verb.endsWith('er')) {
    return 'segunda conjugación';
  } else if (verb.endsWith('ir')) {
    return 'tercera conjugación';
  }
  return false;
};

const getConjugations = (verbA, verbB) => {
  const verbAResult = validateVerb(verbA);
  const verbBResult = validateVerb(verbB);

  if (!verbAResult || !verbBResult) {
    console.log('Uno de los verbos es incorrecto');
    return;
  };

  console.log(`El verbo ${verbA} es de la ${verbAResult} y el verbo ${verbB} es de la ${verbBResult}`);
};

getConjugations('viajur', 'cocinur');
getConjugations('estudiar', 'leer');
getConjugations('beber', 'comer');
getConjugations('ver', 'vivir');
getConjugations('escribir', 'abrir'); */



/* - Crear una función llamada generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". */

/* Esta versión no coge dos letras aleatorias */

/* const generateWord = (wordC, wordD, wordE) => {
  console.log(wordC.substring(3, 5) + wordD.substring(0, 2) + wordE.substring(1, 3));
};

generateWord('ordenador', 'vaso', 'estuche'); */

/* Resolución en clase versión larga */

/* const generateWord = (wordA, wordB, wordC) => {
  const randomNumberA = Math.floor(Math.random() * wordA.length);
  const randomNumberB = Math.floor(Math.random() * wordB.length);
  const randomNumberC = Math.floor(Math.random() * wordC.length);
  const randomNumberD = Math.floor(Math.random() * wordD.length);
  const randomNumberE = Math.floor(Math.random() * wordE.length);
  const randomNumberF = Math.floor(Math.random() * wordF.length);

  console.log(
    wordA.charAt(randomNumberA) +
      wordB.charAt(randomNumberB) +
      wordC.charAt(randomNumberC) +
      wordD.charAt(randomNumberD) +
      wordE.charAt(randomNumberE) +
      wordF.charAt(randomNumberF)
  );
};

generateWord('Hola', 'Adiós', 'Mano'); */

/* Resolución en clase versión corta */

const getTwoRandomLetters = word => {
  const randomNumberA = Math.floor(Math.random() * word.length); //obtener 2 letras aleatorias de cada palabra. Hay que multiplicarlo por el word length para multiplicarlo por el máximo de letras que tenga esa palabra.
  const randomNumberB = Math.floor(Math.random() * word.length);
  const firstLetter = word.charAt(randomNumberA);
  const secondLetter = word.charAt(randomNumberB);

  return firstLetter + secondLetter;
};

const generateWord = (wordA, wordB, wordC) => {
  const first = getTwoRandomLetters(wordA);
  const second = getTwoRandomLetters(wordB);
  const third = getTwoRandomLetters(wordC);

  console.log(first + second + third);
};

generateWord('Hola', 'Adiós', 'Mano');



/* - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". */

/* const indexAt = at => {
  console.log(at.indexOf('@'));
};

indexAt('julia@gmail.com');

const indexDomain = domain => {
  console.log(domain.substring(5));
};
 */

/* Resolución en clase */

const getNameAndDomain = email => {
  const atPosition = email.indexOf('@');
  const name = email.substring(0, atPosition);
  const domain = email.substring(atPosition + 1);
  console.log(`El usuario es ${name}. El dominio es ${domain}`);
};

getNameAndDomain('hola@trazos.net');



/* - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra. */

/* const printLetter = wordF => {
  console.log(wordF.charAt(1));
};

printLetter('teclado'); */

/* Resolución en clase */

const getRandomLetter = word => {
  const randomNumber = Math.floor(Math.random() * word.length);
  const randomLetter = word.charAt(randomNumber);
  console.log(randomLetter);
};

getRandomLetter('Ordenador');



/* - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs */

/* const upperLowerCase = word5Letters => {
  if (word5Letters.length !== 5) {
    console.log('Esta palabra no tiene 5 letras.');
    return;
  }
};

upperLowerCase('piano'); */

/* Resolución en clase */

const intercalateLetters = word => {
  console.log(
    word.charAt(0).toLowerCase() +
      word.charAt(1).toUpperCase() +
      word.charAt(2).toLowerCase() +
      word.charAt(3).toUpperCase() +
      word.charAt(4).toLowerCase()
  );
};

intercalateLetters('Adiós');



/* - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87". */

/* const userName = (name, surname) => {
  return name.charAt(0).toUpperCase + surname + Math.ceil(Math.random() * 100);
};

const user = userName('Natalia', 'Fernández');
console.log(user); */

const generateUserName = (name, surname) => {
  const userNameAndSurname = name.charAt(0).toUpperCase() + surname;
  const randomNumber = Math.ceil(Math.random() * 100);

  console.log(userNameAndSurname + randomNumber);
};

generateUserName('Juan', 'Pérez');



/* EJERCICIOS 4 JUNIO 2024 */

/* Crea una función que reciba una palabra cualquiera e imprima la palabra con la primera y la última letra en mayúsculas */

const firstLastLetterUpperCase = word => {
  const first = word.charAt(0).toUpperCase();
  const last = word.charAt(word.length - 1).toUpperCase();
  const middle = word.substring(1, word.length - 1).toLowerCase();

  console.log(first + middle + last);
};

firstLastLetterUpperCase('ordenador');



/* Ahora haz que la letra del medio sea también una mayúscula */

const firstMiddleLastLetterUpperCase = word => {
  const first = word.charAt(0).toUpperCase();
  const last = word.charAt(word.length - 1).toUpperCase();

  const middlePosition = Math.floor(word.length / 2); //para obtener la posición del medio de la palabra

  const middleLetter = word.charAt(middlePosition).toUpperCase(); //para transformar la letra del medio en mayúscula

  const firstSegment = word.substring(1, middlePosition);
  const secondSegment = word.substring(middlePosition + 1, word.length - 1);

  console.log(first + firstSegment + middleLetter + secondSegment + last);
};

firstMiddleLastLetterUpperCase('ordenador');



/* Crea una función que recibe dos palabras y las devuelve unidas por un guión */

const wordHyphenWord = (wordM, wordN) => {
  console.log(wordM + '-' + wordN);
};

wordHyphenWord('clase', 'silla');



/* Crea una función que recibe una palabra de 5 letras y te dice cuántas vocales tiene */

/* const howManyVowels = word => {
  if (word.length !== 5) {
    console.log('Esta palabra no tiene 5 letras');
    return;
  }
};

const vowel1 = 'a';
const vowel2 = 'e';
const vowel3 = 'i';
const vowel4 = 'o';
const vowel5 = 'u';

if (word.includes(vowel1, vowel2, vowel3, vowel4, vowel5)) {
}

howManyVowels('cesta'); */

/* Resolución en clase versión larga */

/* const countVowels = word => {
  let vowelsCounter = 0; //tiene que ser let para poder cambiar el valor

  if (
    word.charAt(0) === 'a' ||
    word.charAt(0) === 'e' ||
    word.charAt(0) === 'i' ||
    word.charAt(0) === 'o' ||
    word.charAt(0) === 'u'
  ) {
    vowelsCounter++;
  }
}; */

/* Resolución en clase versión corta */

const countVowels = word => {
  let vowelsCounter = 0; //tiene que ser let para poder cambiar el valor

  const vowels = 'aeiouAEIOUáéíóú';
  if (vowels.includes(word.charAt(0))) {
    vowelsCounter++;
  }
  if (vowels.includes(word.charAt(1))) {
    vowelsCounter++;
  }
  if (vowels.includes(word.charAt(2))) {
    vowelsCounter++;
  }
  if (vowels.includes(word.charAt(3))) {
    vowelsCounter++;
  }
  if (vowels.includes(word.charAt(4))) {
    vowelsCounter++;
  }

  console.log(`La palabra ${word} tiene ${vowelsCounter} vocales`);
};

countVowels('Adiós');



/* Función que recibe una palabra de 5 letras y la imprime al revés. Ejemplo: Adios sería soiaD */

const wordBackwards = word => {
  if (word.length !== 5) {
    console.log('Esta palabra no tiene 5 letras');
    return;
  }
  console.log(word.charAt(4) + word.charAt(3) + word.charAt(2) + word.charAt(1) + word.charAt(0));
};

wordBackwards('móvil');



/* Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos. Para el número 123 el resultado debería ser 6 */

/* const sumDigits = number => {
  if (number < 100 || number > 999) {
    return 'Este número no tiene 3 cifras';
  }
  else {
    const numberString = number.toString();
    console.log(Number(numberString.charAt(0)) + Number(numberString.charAt(1)) + Number(numberString.charAt(2)));
  }
};

sumDigits(123); */

const sumDigits = number => {
  const numberString = String(number);
  const firstNumber = numberString.charAt(0);
  const secondNumber = numberString.charAt(1);
  const thirdNumber = numberString.charAt(2);

  console.log(Number(firstNumber) + Number(secondNumber) + Number(thirdNumber));
};

sumDigits(453);
