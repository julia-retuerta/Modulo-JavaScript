/* Se crea una variable con valor 0 y se crea una función llamada addOne y se le suma 1 a number 3 veces. */

let number = 0;

function addOne() {
  number++;
}

addOne();
addOne();
addOne();

console.log(number);

/* Se crean dos constantes con valor numérico y se realizan operaciones con ellas. */

const numberA = 10;
const numberB = 2;

console.log(numberA + numberB); //suma
console.log(numberA - numberB); //resta
console.log(numberA * numberB); //multiplicación
console.log(numberB / numberA); //división
console.log(numberA % numberB); //resto de la división (módulo)

/* Función llamada sumNumbers que recibe 2 números y devuelve su suma. */

function sumNumbers(numberC, numberD) {
  console.log(numberC + numberD);
}

sumNumbers(4, 8);
sumNumbers(15, 8);
sumNumbers(40, 26);

/* Función llamada printName que recibe un nombre y una edad y dice por consola "Hola, me llamo [nombre] y tengo [edad] años". */

function printName(name, age) {
  console.log('Hola, me llamo ' + name + ' y tengo ' + age + ' años');
}

printName('Carlos', 23);
