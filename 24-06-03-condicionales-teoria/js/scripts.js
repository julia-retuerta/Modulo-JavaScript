/* CONDICIONALES */


//const numberA = 6;
//const numberB = '6';

//Hay que poner 3 iguales === para comparar valor y tipo
//console.log(numberA === numberB);

//console.log(Boolean('hola')); esto siempre va a devolver true.
// si el string está vacío ' ' da false.

//console.log(Boolean(9)); esto siempre va a devolver true.
// si el nº es 0 da false.

//console.log(Boolean(null)) esto siempre da false
//console.log(Boolean(undefined)) esto siempre da false

/* const number = 6;
const numberB = 98;

if(number === numberB){
    console.log('Son iguales');
} else{
    console.log('No son iguales');
} */

/* EJEMPLO CONDICIONAL MÚLTIPLE (&& ||) */

const a = 1;
const b = 10;
const c = 5;
const d = 8;

/* if(a < b && c < d){
    console.log('Todo ok');
} */

if ((d < a && b > c) || c < d) {
  console.log('Todo ok');
}

/* EJEMPLO APUNTES IF */

/* let number = 4;

if (number === 4) {
  console.log((number = 10));
}
if (number === 10) {
  console.log((number = 0));
} */

/* EJEMPLO APUNTES IF ELSE IF*/

let number = 4;

if (number === 4) {
  console.log((number = 10));
} else if (number === 10) {
  console.log((number = 0));
}