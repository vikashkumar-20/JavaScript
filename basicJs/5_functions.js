// function greet() {
//     console.log("Welcome, Vikash")
// }

// greet();

function sum(a, b)
{
    return a+b;
}

console.log(sum(5,7));

function greet(name) {
    // console.log(`Welcome, ${name}`)
    console.log("Welcome, " + name);
}

greet("Ram");

// Function Experssion

let result = function  add (a,b)
{
    console.log(a + b);
}

// add(20,10); we can't call add directly because we assign the add() to result so we can call result().
result(50,20)


// Annonymus Function 

let value = function(a,b)
{
    console.log(a + b);
}

value(10, 20);


// IIFE: immediately invoked fuction experssion


// Syntax:
let res = (function (a, b) {
    console.log(a + b);
    return a + b;
})(5, 10);

console.log("Sum of the number is: " + res);


// Calculator

function calculator (a,b,op) { 

    if(op === '+')
    {
        return a + b ;
    }
    else if(op === '-')
    {
        return a - b ;
    }
    else if(op === '*')
    {
        return a * b ;
    }
    else
    {
        return a / b ;
    }
}

console.log(calculator(2,5,'/'));

//reverse a string

function revStr(str) {

    let reversed = "";

    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str[i];
    }
    return reversed;


}

console.log(revStr("vikash"))


//Palindrome 

function isPalindrome (str) {

    let rev = "";
    for(let i=str.length-1; i >=0; i--)
    {
        rev = rev + str [i];
    }
    if(str === rev)
    {
        return "Palindrome";
    }
    else
    {
        return "Not a Palindrome";
    }

}

console.log(isPalindrome("madan"))