/* TEORÍA BUCLES */

/* Bucles for */

/* Partes de este bucle:
Variable inicial: normalmente se nombra como i
Condición
Contador */
//siempre let

/* let counter = 0
const printValue = () => {
    if (counter < 5){
        console.log(counter)
    }

    counter++
}

printValue()
printValue()
printValue()
printValue()
printValue()
printValue()
printValue() */


for (let counter = 0; counter < 5; counter++){
    console.log(counter);
}

//la condición siempre se tiene que dejar de cumplir en algún momento. La condición no es cuándo se deja de cumplir, es la condicion para que se ejecute


/* Bucles for of */
//Sirve para sacar los valores uno a uno

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let counter = 0; counter < numbers.length; counter++){
    console.log(numbers[counter]);
}

//el código de arriba es el mismo que el de abajo
//siempre const

for (const number of numbers){
    console.log(number);
}


const word = 'Tatiana';
for (const letter of word) {
    console.log(letter);
}



/* EJERCICIOS BUCLES */

/* - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0. */

const backwards = number => {
for (let counter = 5; counter >= 0; counter--) {
console.log(counter)
}
}

backwards(5);


/* - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

/* const sum = numbers => {
for (let counter = 10; counter < numbers.length; counter++)
}

sum([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) 
alamacenar la suma fuera*/

/* - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

  4 x 0 = 0
  4 x 1 = 4
  4 x 2 = 8
  4 x 3 = 12
  4 x 4 = 16
  4 x 5 = 20
  4 x 6 = 24
  4 x 7 = 28
  4 x 8 = 32
  4 x 9 = 36
  4 x 10 = 40 */


  const multiply = number => {
    for (let counter = 10; counter >= 0 && counter <=10; counter++){
        console.log(number * counter)
    }
  }

  multiply(5)
  


