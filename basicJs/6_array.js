// Array: Array is the collection of similar data types. Array takes contigous memory and we can acess the
// element through indexs.

// Iterable - object where we can use the for of loop.


// Array like object - Any object with length property and use indexes to acess the items.

// typeof(array) : Object.
let arr = [];
console.log(typeof (arr));

// creating array 

// Using Constructor 

let arr1 = new Array();
console.log(arr1);

let arr2 = new Array("Apple", "Grapes");
console.log(arr2);

//Using literals

let fruits = ['Apple', 'Grapes']
console.log(fruits);


// Empty array 

let num = [];
console.log(num);


//Acessing the elements
let fruit = ['Apple', 'Grapes']
console.log(fruit[0])
console.log(fruit[1])

//Modifying Element 

fruit[0] = "Vikash";
fruit[1] = "Kushboo";
console.log(fruit[0])
console.log(fruit[1])


// Array traversal 

//1.for..of Loop: The for...of Loop is used to iterate over the values of an iterable object such as arrays, objects, strings

let veg = ["Potato", "Banana", "Lady's Finger", "Beans", "Peas"]
for (let items of veg) {
    console.log(items);
}

//2.For...in Loop: The for...in Loop is used to iterate over the indexs or properties.
for (let items in veg) {
    console.log(items);
}


// For Each: arr.forEach() method calls the provided function once each element of the array.


//The provided function may perform any kind of operation on the element of the given array.

// syntax: arr.forEach((currentValue, index, array) {}, thisValue);

// syntax using fat arrow: arr.forEach((currentValue, index, array) => {,thisValue}


veg.forEach((currentValue) => {
    console.log(currentValue);
})


veg.forEach(function(currentValue, index, veg) {
    console.log(`${index} : ${currentValue}`);
    // console.log(veg);
})


let result = veg.forEach(function(currentValue, index, veg) {
    return `${index} : ${currentValue}`; // We can't return the value from ForEach. We can use only inside the block
    // console.log(veg);
})

console.log(result);



// map function: 

let res = veg.map((currElem, index, arr) => {return `${index} : ${currElem}`});
console.log(res);


// Question 1: Write a program to multiply each element with 2. 

let arrrr = [1,2,3,4,5,1,2,3,4,5]

arrrr.forEach((curr) => { 
    console.log(curr * 2 );
})

let mul = arrrr.map((curr) => {
    return `${curr * 2}`
})

console.log(mul);


// CRUD Operation Part - 1 in array: push(),pop(),shift(),unshift();

// push(): If i want to add a element in array then we use push(). Push add elements at the last index.

arrrr.push(6);
console.log(arrrr);


// pop(): If i want to remove a element in array then we use pop(). Pop removes the last inserted item.

arrrr.pop();
console.log(arrrr);
arrrr.pop();
console.log(arrrr);


// unshift(): unshift add a element in array at first index.

arrrr.unshift(8);
console.log(arrrr);

// shift(): Shift remove an element from array of the first index.
arrrr.shift();
console.log(arrrr);


// CRUD Operation Part - 2 Splice,Slice

//splice: It changes the array by removing or replacing the existing element and/or adding new elements.

// syntax: splice(startCount, deleteCount, item1, item2, ....itemN)

arrrr.splice(2, 0, 10); // It adds a element 10 at index 2 without deleting previos element.
console.log(arrrr);

arrrr.splice(2, 1, 15);
console.log(arrrr);

// indexOf(): It returns the index number of given element. It gives index number if found otherwise return -1;

console.log(arrrr.indexOf(1));


console.log(arrrr.indexOf(1, 2)); //1 is the element and 2 is the start point i.e from which index start searching.

console.log(arrrr.lastIndexOf(4));
//includes(): It seach for the element whether is it present or not in array and returns true or false.

console.log(fruit.includes('Kushboo'));
console.log(fruits.includes('Apple', 1));

//todo: 

const months = ["Jan", "march", "April", "June", "July"]
months.splice(months.length, 0, "Dec");
console.log(months)


const indexToUpdate = months.indexOf('march')
months.splice(indexToUpdate,1,"March");
console.log(indexToUpdate);
console.log(months);

const indexToDelete = months.indexOf('June');
console.log(indexToDelete);
months.splice(indexToDelete, 1)
console.log(months);


// Search and Filter Method

// Find: Used to find the first element if found then first matching element or not then Undefined

let bigNum = arrrr.find((currVal) => { return currVal > 1 });
console.log(bigNum)


//findIndex: It return the index number of first element ac to the condition

console.log(arrrr.findIndex((currVal) => { return currVal > 20}));



// Filter: It returns all the element based on the condition
const filteredData = arrrr.filter((currVal) => { return currVal > 3})
console.log(filteredData);


//Ex: let's say user wants to delete value 6.

const nums = [1,2,3,4,5,6,7,8,15,50,16,6,96,6,45,5,5,5,]
let value = 6; 

let updatedNums = nums.filter((currElem) => { return currElem != value});
console.log(updatedNums);



//Ex: Filtering Price price <= 500

const proucts = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
] 

const filteredProducts = proucts.filter((currValue) => {return currValue.price <= 500});
console.log(filteredProducts);



//Find Unique values const nums = [1,2,3,4,5,6,7,8,15,50,16,6,96,6,45]

let uniqueValues = nums.filter((curr,index) => {
    return nums.indexOf(curr) === index ;
})

console.log(nums);
console.log(uniqueValues);
    

// How to sort and compare an array nums = [1,2,3,4,5,6,7,8,15,50,16,6,96,6,45] and also we have fruits [] in above
fruit.push("Anu");
console.log(fruit);
console.log(fruit.sort());

console.log(nums.sort()); // sort() not worked on numbers Output [1, 15, 16,  2,  3, 4, 45, 5,  5,  5,  5, 50, 6,  6,6,  7,  8, 96]

//So, we have compare  to sort the numbers.
const sortedNumbers = nums.sort((a, b) => a - b);
console.log(sortedNumbers);

//How it works internally

nums.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;
});

console.log(nums);

// For descending sort 
const sortedNumbersDescendingOrder = nums.sort((a, b) => b - a );
console.log(sortedNumbersDescendingOrder);

//How it works internally

nums.sort((a, b) => {
    if(a > b) return -1;
    if(b > a) return 1;
});

console.log(nums);


// Practice Question 

// Using map to square of each number and create a new array

const numss = [ 1,2,3,4,5 ]

let newarrr = numss.map((curr) => curr * curr);
console.log(newarrr);

// Captilize each string
console.log(fruit);
let captilizedString = fruit.map((currElem) => currElem.toUpperCase());
console.log(captilizedString);

// Using map, number is squared if it is even.

let squaredNumber = numss.map((curr) => {
    if(curr % 2 == 0 )
    {
        return curr * curr;
    }
}).filter((curr) => curr != undefined)

console.log(squaredNumber);

// Using map, add a prefix Mr. in array names.

console.log(fruit);
let updateName = fruit.map((curr) => {
    return `Mr.${curr}`
})

console.log(updateName);


//Reduce Method: The reduce method is used to accumulate or reduce an array to a single value.

//Syntax arr.reduce((accumulate,index,array) => {}, initailValue)

const shoppingCartValue = [2000, 500, 1500, 200];
let total = shoppingCartValue.reduce((acc, curr) => 
{
    return acc + curr;
},0)

console.log(total);






