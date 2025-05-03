// Let, Const and Var

// Let: We can't redeclare, we only reassigned and it is block scoped. It is mutable.
let num = 10;
num = 20;
console.log(num)


// var: We cant redeclare, we can reassigned the value and it is function scoped. It is mutable.
var num1 = 10;
var num1 = 20;
console.log(num1);

// Const: We cant redeclare, we can reassigned the value and it is block scoped. It is immutable. If we can assign then we can't change.

const pi = 3.142;
console.log(pi)

// pi = 4.1; This gives error. 


//Template String or it is also known as template literals, provide a convenint and flexible way to create strings in Js.(``)

let firstName = "Vikash";
let lastName = "Kumar"

console.log(firstName + " " + lastName);

console.log(`${firstName}  ${lastName}`) // Template Literals


//String Interpolation 

let age = 25;
console.log(`I am ${age} years old`);


// Mulit-line string

console.log(`Hi,I am Vikash Kumar from Delhi.
I am doing MCA from Graphic Era University, Dehradun. `)



// Default Parameter

function sum (a=10, b=20) { 
    return a+b; 
}

console.log(sum()); //Output 30
console.log(sum(5)); //Output 25


// FAT Arrow Function

const add = (a, b) => { 
    return a + b ; 

}
console.log(add(50,20));




