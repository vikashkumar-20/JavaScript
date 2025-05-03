// Time Based Events.

//1. SetTimeout: setTimeout Function is used to execute a function or code of block after a specified time. 

// const delayedFunction = () => { 
//     console.log("This function execute after 2sec or 2000ms")
// }

// const normalFunction = () => { 
//     console.log("This is normal function execute before or in first delayed function")
// }

// setTimeout(delayedFunction, 2000);
// normalFunction();


// SetInterval: Repeated after a time interval
function repeatedFunction () { 
    console.log("This is repeated function it executes every 1 sec or 1000ms ")
}

// setInterval(repeatedFunction, 1000);


//clearTimeout 

const delayedFunction = () => { 
    console.log("This function execute after 2sec or 2000ms")
}

let ClearTimeOut = setTimeout(delayedFunction, 2000);

// clearTimeout(ClearTimeOut);

//clearInterval

function repeatedFunction () { 
    console.log("This is repeated function it executes every 1 sec or 1000ms ")
}

// let intervalID = setInterval(repeatedFunction, 1000);

// clearInterval(intervalID);


//Practice Time: Question

console.log("Practice Time");

const repeatedFunc = () => {
    console.log("This function repeates every 1000 milliseconds (1 Second).")
}

let intervalID = setInterval(repeatedFunc, 1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval cleared after 5 seconds.");
},5000);