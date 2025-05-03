// The localStorage objects allows save the data in key/value in the browser.

//How to add the data from localStorage

localStorage.setItem("Course", "Yotube"); // Add data in local storage in the key value pair: Key: Course, Value: Youtube


// How to get item from local storage using key 
localStorage.getItem("Course");

// How to delete or remove  item from local storage using key 
localStorage.removeItem("Course");

//Note: localStorage can only store string if i want to store array and objects then we have to used JSON.stringfy

//*JSON.stringfy: Coverts array,object in to JSON String.
//JSON is a common data interchange format.
/*
    const data = {name: 'Vikash', age:30, city:'pune'}
    const jsonString = JSON.stringfy(data);
    console.log(jsonString);
    Output: {name: 'Vikash', age:30, city:'pune'}
*/


//JSON.parse: Converts a JSON String into a JavaScript Object.

const jsonString = '{"myname": "Vikash", "age":30, "city":"pune"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);


