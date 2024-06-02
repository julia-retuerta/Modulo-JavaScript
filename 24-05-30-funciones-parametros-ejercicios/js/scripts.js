// EJERCICIOS CON FUNCIONES CON PASO DE PARÁMETROS

/* Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]". */

function sayHello(name) {
  console.log('Hola ' + name);
}
sayHello('María');



/* Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado. */

function calculateSquareArea(side) {
  console.log(side * side);
}
calculateSquareArea(10);



/* Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura. */

function calculateTriangleArea(base, heigth) {
  console.log((base * heigth) / 2);
}
calculateTriangleArea(2, 4);



/* Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio. */

function calculateCircleArea(radius) {
  console.log(3.14 * radius * radius);
}
calculateCircleArea(3);



/* Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32. */

function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}
celsiusToFahrenheit(25);



/* Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8. */

function fahrenheitToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) / 1.8);
}
fahrenheitToCelsius(88);



/* Crea una función totalPrice que reciba un precio y le sume el IVA */

/* Forma larga de hacerlo */
/* function totalPrice(price) {
  console.log(price * 0.21 + price);
}
totalPrice(27); */

/* Forma corta de hacerlo */

function totalPrice(price) {
  console.log(price * 1.21);
}
totalPrice(27);



/* Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note]. */

function writeMessage(name, material, size, note) {
  console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note);
}
writeMessage('Juan', 'tornillos', 2, 'Gracias');
