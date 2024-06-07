/* OBJETOS */

/* Ejemplos de uso: para guardar usuarios en una aplicación */

/* const user1 = {
  name: 'César',
  age: 79,
  isActive: false,
  friends: [],
  address: {
    city: 'Gotham'
  }
};


user.friends.push('globo');

console.log(user);
console.log(user.address.city);
console.log(user.isActive);
console.log(user.name.toUpperCase()); */

/* - Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."*/

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', ' tocar la guitarra', ' pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años y me gusta ${user.hobbies}... Tengo un ${user.pets[0].type} que se llama ${user.pets[0].name} y un ${user.pets[1].type} que se llama ${user.pets[1].name}. Vivo en la calle ${user.address.street}, de la ciudad de ${user.address.city}, ${user.address.state}, ${user.address.country}, con código postal ${user.address.postalCode}. Soy ${user.occupation} y estudié un ${user.education}. Mi teléfono es ${user.phone} y mi correo es ${user.email}.`
);

/* - Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares. */

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (let counter = 0; counter < data.numbers.length; counter++) {
  let everyValueOfTheArray = data.numbers[counter];
  //console.log(everyValueOfTheArray);

  data.firstFloor.secondFloor.numbersPlus2.push(everyValueOfTheArray + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(everyValueOfTheArray * 2);
  data.fourthFloor.numbersDividedBy2.push(everyValueOfTheArray / 2);
  if (everyValueOfTheArray % 2 === 0) {
    data.fifthFloor.onlyEven.push(everyValueOfTheArray);
  } else {
    data.fifthFloor.onlyOdd.push(everyValueOfTheArray);
  }
}

console.log(data.firstFloor.secondFloor.numbersPlus2);
console.log(data.firstFloor.thirdFloor.numbersDouble);
console.log(data.fourthFloor.numbersDividedBy2);
console.log(data.fifthFloor.onlyEven);
console.log(data.fifthFloor.onlyOdd);

/* - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Victor", y rellena el objeto con los valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String*/

const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    consonants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const receivedPhrase = phrase => {
  const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
  for (let counter = 0; counter < phrase.length; counter++) {
    let everyValueOfTheArray = phrase[counter];
    if (vowels.includes(everyValueOfTheArray)) {
      data2.firstFloor.vowels.push(everyValueOfTheArray);
    }
  }
};

receivedPhrase('Si no estudias, acabarás como Víctor');

console.log(data2.firstFloor.vowels);
