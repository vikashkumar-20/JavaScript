// Loops: Loop is like if we want do same task many times then we use loop.

// If-else Statement: It is used to check the given experssion is true or false.


let temp = 11;

if (temp > 30) {
    console.log("Go on a beach");
}
else {
    console.log("Let's watch TV");
}



if (temp > 30) {
    console.log("Go on a beach");

}
else if (temp > 10 && temp < 20) {
    console.log("Soo Jao");
}
else {
    console.log("Let's watch TV");
}

let age = 20;
let citizen = true;
let isRegisteredToVote = true;

// if(age >= 18 && citizen && isRegisteredToVote)
// {
//     console.log("He/She can Vote");
// }
// else
// {
//     console.log("He/She can not eligible to Vote");
// }


if (age >= 18) {
    if (citizen == true) {
        if (isRegisteredToVote == true) {
            console.log("He/She can Vote");
        }
        else {
            console.log("He/She can not eligible to Vote");
        }
    }
    else {
        console.log("He/She can not eligible to Vote");
    }
}
else {
    console.log("He/She can not eligible to Vote");
}

// Even or odd

let num = 0;
if (num % 2 == 0) {
    console.log(`Even Number: ${num}`)
}
else {
    console.log(`Odd Number: ${num}`)
}


// If a number is Positive, Negative or Zero.

if (num > 0) {
    console.log(`Positive Number: ${num}`)
}
else if (num < 0) {
    console.log(`Negative Number: ${num}`)
}
else {
    console.log(`Number is Zero: ${num}`)
}

// Switch Statement

let day = 'friday';

switch (day) {
    case 'monday':
        console.log("Today is monday");
        break;

    case 'friday':
        console.log("Today is Friday");
        break;

    default:
        console.log("Not a valid day");
}

let shapes = "circle";
let a = 5;
let b = 10;
let c = 15;

switch (shapes) {
    case 'triangle':
        console.log(`Area of the triangle: ${a + b + c}`);
        break;
    case 'square':
        console.log(`Area of the square: ${a * a}`);
        break;
    case 'circle':
        console.log(`Area of the circle: ${3.142 * (a * a)}`);
        break;
    default:
        console.log("Not a valid Shape");
}


// while loop

// num = 1;
// while(num <= 10)
// {
//     console.log(num);
//     num++;
// }

// do while

num2 = 1;
do {
    console.log(num2);
    num2++;
}
while (num2 <= 10);


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Practice 

// 5 * 1 = 5 
// 5 * 2 = 10

number = 6;
count = 1
while (count <= 10) {
    console.log(`${number} * ${count} = ${number * count}`)
    count++;
}

// number2 = 1 ;

// do
// {
//     console.log(`5 * ${number2} = ${5 * number2}` )
//     number2++
// }
// while(number2 <= 10);


// Prime Number or not using for

let num5 = 11;
let isPrime = true;

for (let i = 2; i < num5; i++) {
    if (num5 % i == 0) {
        
        isPrime = false;
        break;
    }
    
}

if (isPrime && num5 > 1) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}



// Leap Year

let year = 2016;

// if((year % 4 === 0 && year % 100 !== 0) || year%400 == 0) 
// {
//     console.log("Leap year");
// }
// else
// {
//     console.log("Not a Leap year");
// }


if(year%4 == 0)
{
    if(year % 100 == 0)
    {
        if(year%400 == 0)
        {
            console.log("Leap year");
        }
        else
        {
            console.log("Not a Leap year");
        }
    }
    else
    {
        console.log("Not a Leap year");
    }
}
else
{
    console.log("Not a Leap year");
}

// *
// **
// ***
// ****
// *****

let z=5;

for(let i=1;i<=z;i++)
{
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}






