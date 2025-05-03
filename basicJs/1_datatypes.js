// Data types tells our complier which types of data are stored in that variables.
// There are two types of data types in Js.
// 1. Primitive 2.Non-Primitive


// Primitive Data types
let myAge = 25 ;
console.log(myAge);
console.log(typeof(myAge));


let str = "Vikash"
console.log(str)
console.log(typeof(str));

let bool = true;
console.log(true);
console.log(typeof(bool));


let undefinedDatatypes = undefined;
console.log(typeof(undefined));
console.log(undefinedDatatypes);

let num = null;
console.log(typeof(num));
console.log(num);

const big1 = 1234567890123456789012345678901234567890n;
console.log(typeof(big1));
console.log(big1);

const sym1 = Symbol('id');
console.log(sym1);
console.log(typeof(sym1));


// Non - Primitive Data Types.


let arr = [1,2,3,4,5]
console.log(arr);
console.log(typeof(arr));


let obj = { 
    name: "Vikash Kumar",
    age: 20,
    city: "Motihari"
}
console.log(obj);
console.log(typeof(obj));

let currDate = new Date();
console.log(currDate);
console.log(typeof(currDate));



// parseInt and parsefloat 

// parseInt: parseInt is used to parse a string and convert into an integer.

const myStr = "42.5";
const myNum = parseInt(myStr);
console.log(typeof(myStr));
console.log(typeof(myNum));
console.log(myNum);


// parsefloat: parsefloat is used to parse a string and convert into an float.

const myStr1 = "42.5";
const myNum1 = parseFloat(myStr1);
console.log(typeof(myStr1));
console.log(typeof(myNum1));
console.log(myNum1);


// Practice of parseInt && parseFloat

console.log(parseInt("123"));
console.log(parseInt("123", 10));
console.log(parseInt("123", 100));
console.log(parseInt("   456   "));
console.log(parseInt("0077"));
console.log(parseFloat("0077"));
console.log(parseInt("123.9"));
console.log(parseFloat("123.9"));
console.log(parseFloat("123.9", 10));
console.log(parseFloat("123.9", 100));
console.log(parseInt("123.7", 10));
console.log(parseInt("Vikash")); //Nan
console.log(parseInt("&123")); //Nan
console.log(parseInt("-123.7"));


// We have also a isNan() function to check whether is it number or not !!

console.log(isNaN("Vikash")); // true because vikash is a string.


// ! NaN = NaN, why it is falsy

if(NaN === NaN)
{
    console.log("Both are equal");
    
}
else
{
    console.log("Both are  not equal");
}


// Output: Both are not equal because if we use two other string to convert a number so both are gives NaN and We got both Nan from two other strings

// eg.
console.log(parseInt("Vikash")); 
console.log(parseInt("Rahul")); // This is the reason


