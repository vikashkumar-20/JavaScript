console.log("Welcome in Math Object")

// Math: Math is a namespace object contains static properties and methods for mathematical constant and functions

// Math works with Number type doesn't work wit BigInt. 


// 1. Constants

const piValue = Math.PI;
console.log(piValue)

//2. Basic Operation

let num = 5.4;
let num2 = -5.424585;
let num3 = -5;
console.log(Math.floor(num)); //  Floor : 5
console.log(Math.ceil(num)); // Ceil : 6 
console.log(Math.round(num)); // round : 5 if after decimal point greater than 5 then ceil value otherwise floor value.

console.log(Math.trunc(num2 , 1)) // trunc: Removes the decimal point and returns only interger.


console.log(Math.abs(num3)) // abs gives absolute value i.e 5 


console.log(Math.floor(3.7)) //3 
console.log(Math.trunc(3.7)) //3

console.log(Math.floor(-3.7)) //-4 it gives the floor value (lowest value) i.e -4 
console.log(Math.trunc(-3.7)) //-3 it removes the decimal part


//exponential and logarithmic functions

console.log(Math.pow(2,3)); // pow: Returns the power of the number

console.log(2 ** 3);


console.log(Math.sqrt(9)) ; // it gives square root

console.log(Math.log(1)); // it gives log


// Generate random number

let randomNumber = Math.random() ;
console.log(randomNumber * 100);

console.log(Math.round(randomNumber * 100)); // Generate a random number btw 1 to 100.