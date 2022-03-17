"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (a) => { console.log(a); });
function printResult(num) {
    console.log("risultato: ", num);
}
let combineValues; // a function that takes two numbers and returns a number
combineValues = add;
console.log(combineValues(3, 4));
