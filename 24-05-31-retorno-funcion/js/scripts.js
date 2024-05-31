/* function getDoubleValue(number){
    const double = number * 2;
    return double;
}

const result = getDoubleValue(8);

console.log(result); */





/* function getSum(numberA, numberB){
    const total = numberA + numberB;
    return total;
}

const result = getSum(8, 8);

console.log(result); */





/* function getSum(numberA, numberB){
    return numberA + numberB;
}

const result = getSum(8, 8);

console.log(result); */




/* EJERCICIOS DE FUNCIONES CON RETURN */

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

function getAverage (numberA, numberB, numberC){
    return (numberA + numberB + numberC) / 3;
}

const resultAverage = getAverage(2, 3, 4);

console.log(resultAverage);



/* - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio. */

function getDiscount (discount, price){
    return price - (price * discount / 100);
}

const resultDiscount = getDiscount(10, 100);

console.log(resultDiscount);




/* - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión */

function getWords (wordA, wordB){
    return (wordA + '-' + wordB);
}

const resultWords = getWords('lima', 'limón');

console.log(resultWords);




/* - Crea una función que reciba un número de kilómetros y los devuelva conviertidos a metros. */

function getMeters (kmA){
    return(kmA * 1000);
}

const resultMeters = getMeters(5);

console.log(resultMeters);



/* - Crea una función que reciba un número de horas y las devuelva convertidas a segundos. */

function getSeconds (hourA){
    return (hourA * 3600);
}

const resultSeconds = getSeconds (1);

console.log(resultSeconds);





/* FUNCIONES DE FLECHA */

const getSum = (numberA, numberB) => {
    console.log(numberA + numberB);
};

/* const doubleNumber = number => {
    return number * 2;
}; */

//esto de aquí arriba es lo mismo que esto:

const doubleNumber = number => number * 2;

getSum(5, 8);



/* EJERCICIOS DE FUNCIONES DE FLECHA */

/* - Crea una función que reciba tres números y devuelva la media entre esos 3 números. */

const getAverage2 = (numberA, numberB, numberC) => {
    const resultAverage = (numberA + numberB + numberC) / 3;
    return resultAverage;
};


/* 

function pasarlo a const
= parámetros
flecha =>

*/


const average = getAverage2(2, 3, 4);
console.log(average);



/* - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio. */

const getDiscount2 = (discount, price) => {
    return price - (price * discount / 100);
};

const resultDiscount2 = getDiscount2 (10, 100);

console.log(resultDiscount2);



/* - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión */

const getWords2 = (wordA, wordB) => {
    return (wordA + '-' + wordB);
}

const resultWords2 = getWords2('lima', 'limón');

console.log(resultWords2);