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
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} y me gusta ${user.hobbies}... Tengo un ${user.pets[0].type} que se llama ${user.pets[0].name} y un ${user.pets[1].type} que se llama ${user.pets[1].name}. Vivo en la calle ${user.address.street}, de la ciudad de ${user.address.city}, ${user.address.state}, ${user.address.country}, con código postal ${user.address.postalCode}. Soy ${user.occupation} y estudié un ${user.education}. Mi teléfono es ${user.phone} y mi correo es ${user.email}.`
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


//console.log(data.firstFloor.secondFloor.numbersPlus2)
  for (let counter = 0; counter < data.numbers.length; counter++){
    console.log(data.firstFloor.secondFloor.numbersPlus2[counter]);
  };
