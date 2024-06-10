/* CALLBACKS */
const printResult = value => {
  console.log(value);
};

const sumNumbers = (a, b, callback) => {
  const result = a + b;

  callback(result);
};

sumNumbers(3, 5, printResult);

//el callback es una función que va a ejecutar otra función
//en este ej callback es printResult

// forEach(cb)

/* const arrayExample = ['a', 'b', 'c'];

const callback = (value, index, array) => {
  console.log(value);
  console.log(index); //esto es equivalente a i o counter. Para obtener el index hay que obtener también el valor, siempre
};

arrayExample.forEach(callback); */

//forma correcta de escribirlo:

const arrayExample = ['a', 'b', 'c'];

/* arrayExample.forEach((value, index) => {
  console.log(value + ' - ' + index);
}); */

//el for each no devuelve nada. Para guardar un resultado hay que utilizar cualquier cosa menos for each

const resultForEach = arrayExample.forEach(letter => {
  return letter.toUpperCase();
});

/* map(cb) */

arrayExample.map((value, index) => {
  console.log(value + ' - ' + index);
});

const resultMap = arrayExample.map(letter => {
  return letter.toUpperCase();
});
//esto da como resultado un array con las letras en mayúsculas

//lo de arriba sería lo mismo que esto:

const resultMap2 = [];
for (const letter of arrayExample) {
  resultMap2.push(letter.toUpperCase());
}

console.log(resultForEach);
console.log(resultMap);
