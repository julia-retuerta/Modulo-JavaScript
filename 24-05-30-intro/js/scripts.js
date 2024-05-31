/* let number = 0;

function addOne(){
    number++;
}

addOne();
addOne();
addOne();

console.log(number); */

/* const numberA = 10;
const numberB = 2;

console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberB / numberA);
console.log(numberA % numberB); */


/* function sumNumbers(numberA, numberB){
console.log(numberA + numberB);
}


function printName(name, age){
    console.log('Hola, me llamo ' + name + ' y tengo ' + age + ' años');
}

sumNumbers(4, 8);
sumNumbers(15, 8);
sumNumbers(40, 26);


printName('Carlos', 23); */




// Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".

function sayHello(name){
    console.log('Hola ' + name)
}
sayHello ('María');





function calculateSquareArea(side){
    console.log(side * side)
}
calculateSquareArea (10);




function calculateTriangleArea(base, heigth){
console.log(base * heigth / 2)
}
calculateTriangleArea(2, 4)




function calculateCircleArea(radius){
    console.log(2 * 3.14 * radius)
    }
calculateCircleArea(3)   





function celsiusToFahrenheit(celsius){
console.log (celsius * 1.8 + 32)
}
celsiusToFahrenheit(25);





function fahrenheitToCelsius (fahrenheit){
console.log ((fahrenheit - 32) / 1.8)
}
fahrenheitToCelsius (88);





function totalPrice (price){
    console.log (price * 1.21)
}
totalPrice (27)




function writeMessage (name, material, size, note){
    console.log (name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note)
}
writeMessage ('Juan', 'tornillos', 2, 'Gracias')
