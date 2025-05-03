// Object.groupBy()
// Map.groupBy()
// Temporal.PlainDate()
// Temporal.PlainTime()
// Temporal.PlainMonthDay()
// Temporal.PlainYearMonth()


const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(fruits, myCallback);