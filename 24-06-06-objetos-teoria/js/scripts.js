/* OBJETOS */

// Ejemplo de uso: para guardar usuarios en una aplicación

const user = {
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
console.log(user.name.toUpperCase());
