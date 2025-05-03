// Date: Date is a object which helps to deal with date.
// Date () is use to create Date Objects. When called it returns a string.

//Syntax: new Date() or new Date(Date String).

//* 9 Ways to create a date object.
// new Date(), new Date(Date String), new Date(year,month), new Date(year,month), new Date(year,month,day)
//new Date(year,month,day,hours), new Date(year,month,day,hours,minutes), new Date(year,month,day,hours,minutes,seconds)
//new Date(year,month,day,hours,minutes,seconds,miliseconds), new Date(miliseconds)

let date = new Date ();
console.log(date); // 2025-05-01T23:00:49.297Z *** ISO-8601 format, here date & time are together and and Time 
// is  seperated by T and Z at the end indicates UTC (Coordinated Universal Time).

let date1 = new Date ("2000-01-20"); 
console.log(date1); // Thu Jan 20 2000 05:30:00 GMT+0530 (India Standard Time)

let date3 =  new Date (2025, 1);
console.log(date3); // Sat Feb 01 2025 00:00:00 GMT+0530 (India Standard Time)

let date4 =  new Date (2025,1,20);
console.log(date4); // Thu Feb 20 2025 00:00:00 GMT+0530 (India Standard Time)


let date5 =  new Date (2025,1,20,10);
console.log(date5); //Thu Feb 20 2025 10:00:00 GMT+0530 (India Standard Time)


let date6 =  new Date (2025,1,20,10,20);
console.log(date5); //Thu Feb 20 2025 10:20:00 GMT+0530 (India Standard Time)

let date7 =  new Date (2025,1,20,10,20,30);
console.log(date7); //Thu Feb 20 2025 10:20:30 GMT+0530 (India Standard Time)

let date8 =  new Date (2025,1,20,10,20,30,2000);
console.log(date8); //Thu Feb 20 2025 10:20:32 GMT+0530 (India Standard Time)


let date9 =  new Date (20000);
console.log(date9); // Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)


// Js Counts Months 0-11: 0-Jan, 11-Dec.

//Date String Format: If the dateString is in a recogniable format, the date object created accordingly.

let datee = new Date("2024-01-25")
let datee2 = new Date("January 25, 2024")

//Both are same.


//JS get Date mehtods // getting components.

// console.log("This is Practice time");
// const currentDate = new Date(); //It's a static time & date when i create object, store the same date & time in variable.
// console.log(currentDate)
// const year = currentDate.getFullYear();
// console.log(year);
// const month = currentDate.getMonth();
// console.log(month);
// const day = currentDate.getDay();
// console.log(day);
// const hr = currentDate.getHours();
// console.log(hr);
// const minutes = currentDate.getMinutes();
// console.log(minutes);
// const sec = currentDate.getSeconds();
// console.log(sec);
// const ms = currentDate.getMilliseconds();
// console.log(ms);


////JS set Date mehtods // getting components.


console.log("This is Practice time");
const currentDate = new Date(); //It's a static time & date when i create object, store the same date & time in variable.
console.log(currentDate)
const year = currentDate.setFullYear(2026);
console.log(currentDate)
const month = currentDate.setMonth(5);
console.log(currentDate)
const day = currentDate.setDate(20);
console.log(currentDate)
const hr = currentDate.setHours(20);
console.log(currentDate)
const minutes = currentDate.setMinutes(20);
console.log(currentDate)
const sec = currentDate.setSeconds(50);
console.log(currentDate)
const ms = currentDate.setMilliseconds(20000);
console.log(currentDate)


//Get Time method 

console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getTime())

//Set Time 

// console.log(currentDate)
// const hr = currentDate.setHours(20);
// console.log(currentDate)
// const minutes = currentDate.setMinutes(20);
// console.log(currentDate)
// const sec = currentDate.setSeconds(50);
// console.log(currentDate)
// const ms = currentDate.setMilliseconds(20000);
// console.log(currentDate)



//Using Locale conventions 

let localeDate = currentDate.toLocaleDateString();
console.log(localeDate); //20/6/2026


console.log(currentDate.toLocaleTimeString()); //8:21:10 pm


//Parse(): Parse a date string and returns in miliseconds

console.log(Date.parse(currentDate)); // 1781967070000


///Bonus

console.log(Date.now()); // 1746143914776
console.log(currentDate.getTime()); // 1781967070000


// Practice questions

//question 1: Write a function to add a specified number of days in a given date. 
console.log("Question: 1")
const addDaysToDate = (date, day) => { 

    let updatedDate = date.setDate(date.getDate() + day);
    return new Date(updatedDate);
}
const currDate = new Date ("2024-02-29");
const newDate = addDaysToDate(currDate, 7);
console.log(newDate.toLocaleDateString());


//Question:2 calculate the diff in days btw two dates.
console.log("Question: 2")

const date2 = new Date("2024-02-19");
const datee5 = new Date("2024-03-01");

let noOfDays = datee5 - date2;
console.log(noOfDays/(1000*60*60*24)); //11 Days



