// Object: Object is providing a way to group related data and functions together. 
// In Js Object is key-value pair where each key is a string or (symbol) and each value can ve any data type.
//Objects can have properties and methods, making them versatile for various use cases.

// syntax: obj = {}

//creating object;

let obj = {};
console.log(obj);

let obj1 = new Object;
console.log(obj1);

const prod = {
    name: "Vikash",
    age: 30
}
console.log(prod);

const product = {
    name: "Vikash",
    age: 30,
    "is'student": false,
    greet: function () {
        console.log("Welcome Dost")
    }
}
console.log(product);


//Acessing Properties

console.log(product.name);
console.log(product.age);
console.log(product.greet());
console.log(product["is'student"])

//adding and modifying properties: 


product.job = "MERN Dev"
product.age = 18;


console.log(product);


//Methods

product.greet();


//we can add dynamic keys in an object.
let IdType = "studentID";
const student = {
    [IdType]: 23391035,
    fname: "Vikash Gupta",
    age: 25,
    greet: function () {
        console.log(`Hey my name is ${student.fname} and my ${IdType} is ${student[IdType]}`)
    }
}

student.greet();


//Data Modeling: Data modeling in JavaScript objects involves structuring data within a JavaScript object to represent real-world entities and their relationships.
// JavaScript objects, with their key-value pair structure, provide a flexible way to model data.

//eg: 

const car = {
    brand: "Toyota",
    model: "camry",
    year: 2022,
    start: function () {
        console.log("Engine Started !!")
    },

}

//Pass by Call and Pass by Refrence

//Pass by call 

let x = 10;
const modifyValue = (x) => {
    x = 20;
    return x;
}

console.log("Original Value: ", x);
console.log(`Modified Value: ${modifyValue(x)}`);
console.log("Original Value: ", x);

//Pass by Refrence

let fobj = {
    name: "Vikash",
    college: "GEU",
    course: "Mca",
    classRollNo: 89,
}

let sobj = fobj;
console.log(fobj);
console.log(sobj);

sobj.name = "Rahul"

console.log(fobj);
console.log(sobj);

//To avoid these thing pass by refrence because it changes in original object then 
//we use Object.assign()  or the spread operator(...)


let obj5 = {
    name: "Vikash",
    college: "GEU",
    course: "Mca",
    classRollNo: 88,
}

let obj7 = Object.assign({}, obj5);

console.log(obj7);
obj7.name = "Vikash"
console.log("checking time");
console.log(obj5);
console.log(obj7);



// Equal or not

// const isEqual = obj5 === obj7 ? true : false;
// console.log(isEqual); //false, because here i use Object.assign() it crates a copy not refrenced.

const isEqual = fobj === sobj ? true : false;
console.log(isEqual); //true, because direct assign if we assing one object in to another then same object share same memory.

//JSON (Javascript Object Notation)

let JSONdata = JSON.stringify(obj7);
console.log(JSONdata);
console.log(JSON.parse(JSONdata));



//This: This is a keyword. if i use this keyword in a object then this refers to the same object.

/* 

The "this" keyword refers to different objects depending on how it is used:

*In an object method, this refers to the object.

*Alone, this refers to the global object.

*In a function, this refers to the global object.

*In a function, in strict mode, this is undefined.

*In an event, this refers to the element that received the event.

*Methods like call(), apply(), and bind() can refer this to any object.
*/

function callMe() {
    console.log(this) //Inside a function this refers to global object.
};

callMe();

console.log("invoke global object by this");
console.log(this);


"use strict";

x = 5.2;
console.log(x); //This gives a error if using strict mode.


// let thisobj = { 
//     name: "Rahul Sharma",
//     greet: function() { 
//         console.log(this) ////refers to object
//     }
// };

// thisobj.greet();


// let thisobj = { 
//     name: "Rahul Sharma",
//     greet() { 
//         console.log(this) //refers to object
//     }
// };

// thisobj.greet();


// let thisobj = { 
//     name: "Rahul Sharma",
//     greet: () => { 
//         console.log(this) //refers to window when i use this inside arrow function
//     }
// };

// thisobj.greet();


//Object useful methods


let thisobj = {
    name: "Rahul Sharma",
    greet: () => {
        console.log(this) //refers to window when i use this inside arrow function
    }
};

console.log(Object.entries(thisobj)); // all entries: [ [ 'name', 'Rahul Sharma' ], [ 'greet', [Function: greet] ] ]

console.log(Object.keys(thisobj)); // all keys: [ 'name', 'greet' ]

console.log(Object.values(thisobj)); // all values: [ 'Rahul Sharma', [Function: greet] ]

console.log(thisobj.hasOwnProperty("name")); // true

Object.freeze(thisobj); //Freeze the object, we can't modify.

thisobj.name = "Rahul Vikash"; // After freezing we can't modify.

console.log(thisobj);

let target = { a: 1, b: 2 }
let source = { b: 4, c: 5 }

let mergedObj = Object.assign(target, source);
console.log(mergedObj);



//Practice Question: Given an object representing a student, write a function to add a new subject with 
// its corresponding grade to the student's record. Also check if the grades property is persent or not ? 


const studentobj = {
    name: "Taniya",
    age: 24,
    grades: {
        math: 60,
        science: 75,
        history: 95
    }
}

const addNewSub = (obj, sub, num) => {
    if (!obj.grades) {
        obj.grades = {}
    }
    obj.grades[sub] = num;
}
addNewSub(studentobj, "Social", 78);

console.log(studentobj);

// console.log(studentobj.hasOwnProperty('grades'));


////Practice Question2: Compare the two function and determine if they have same properties and value. 

let obbb = { name: "Rahul", age: 30 };
let obbb2 = { name: "Rahul", age: 30 };
let obbb3 = { name: "Rahul", age: 30, city: "Motihari" };



let o3 = Object.keys(obbb3);


const areObjectsEqual = (obj1, obj2) => {

    let o1 = Object.keys(obj1);
    let o2 = Object.keys(obj2);


    if (o1.length !== o2.length) {

        return false;
    }
    
    for(let key in obj1)
    {
        if(obj1[key] !== obj2[key])
            {
                return false;
            }
        
    }
    return true;

}


console.log(areObjectsEqual(obbb2,obbb3))
console.log(areObjectsEqual(obbb,obbb2))



//Practice Question3 : Write a function that transforms an array of objects 
//into an object where the keys are the object id's.

let inputArray = [ 
    {id:1, name:"Alice"},
    {id:2, name:"Bob"},
    {id:3, name:"Charlie"},
]

let objj = {...inputArray};
// console.log(objj);

//or 

const transformsArray = (arr) => { 
    let obb = {};
    for(let key of arr)
    {
        
        obb[key.id] = key;
        
    }
    return obb;
}

console.log(transformsArray(inputArray));