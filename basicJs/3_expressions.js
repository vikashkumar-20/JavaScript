// Experssion: An expression in JavaScript is a valid unit of code that resolves to a value. It's a combination of operands (values, variables, or functions).
// eg: 2+4 = ? 

// Operator: Operators that the JavaScript interpreter can evaluate to produce a result. Operators perform specific actions on operands. 
// eg. + - / *  == ....etc

// Type of operator

// Assignment Operator

let num = 2;
let num2 = num;
console.log(num2)

//Arithmetic Opertor 

console.log(2 + 4);
console.log(4 - 2);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(15 % 4);

// Question 1: 
let result = "hello" / 2;
console.log(result);

// Question 1: 

let result1 = 0.1 + 0.2;
console.log(result1);


let result2 = 0.1 + 0.2;
console.log(result2.toFixed(2));


// Comparison Operator

if (5 === 5) {
    console.log("Both are equal");
}
else {
    console.log("Both are not equal");
}

if ("5" == 5) {
    console.log("Both are equal");
}
else {
    console.log("Both are not equal");
}

if ("5" === 5) {
    console.log("Both are equal");
}
else {
    console.log("Both are not equal");
}

console.log(5 > 2 );
console.log(5 < 2 );
console.log(5 < 5 );
console.log(2 < "Vikash");

// Logical Operator (!  &&  ||)

let x = 10;
let y = 20; 
console.log( x > 0 && y > 0);


let a = 15;
let b = 30; 
console.log( a > 0 || b < 0);


console.log(5 != 5 )


// Question 1: WAP that detemines if a person is eligible to drive based on 
// their age and being greater than or eual to 18 and having a valid driver's license.

let age = 19;
let hadValidDriverLicense = false;

// if(age >= 18 && hadValidDriverLicense)
// {
//     console.log("He/She can Drive");
// }
// else
// {
//     console.log("He/She can not eligible to Drive");
// }


// Conditional (Ternary) Operator

console.log( age >= 18  && hadValidDriverLicense ?"He/She can Drive" : "He/She can not eligible to Drive")




// Question 1: We have a score variable. If the score is greater or equal to 60.
// The student passes, otherwise they fail use ternary operator.

let score = 61; 
console.log(score >= 60 ? "Pass" : "Fail")


// Interview Questions

console.log("5" - 3);

console.log(2 < 12 < 5)