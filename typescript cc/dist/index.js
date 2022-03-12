"use strict";
let id = 6;
let nickname = 'goke';
let isGood = true;
let ids = [1, 2, 3];
let x = '2';
let arr = [1, "goke"];
//tuple
let person = [1, "goke", true];
//tuple array
let employee;
employee = [
    [1, 'wale'],
    [2, 'jill'],
    [1, 'tony']
];
// Composing Types
// With TypeScript, you can create complex types by combining simple ones. 
// There are two popular ways to do so: with unions, and with generics.
//union
let prodId;
// enum
var direction;
(function (direction) {
    direction["up"] = "Up";
    direction["down"] = "Down";
    direction["left"] = "Left";
    direction["right"] = "Right";
})(direction || (direction = {}));
const user1 = {
    id: 1,
    name: 'goke'
};
const add = (x, y) => x + y;
const minus = (x, y) => x - y;
const user = {
    id: 1,
    name: 'goke'
};
// type assertion
let cId = 1;
// let clientId = <number>cId 
let clientId = cId;
//function
function addNum(x, y) {
    return x + y;
}
addNum(1, 3);
//void 
function log(message) {
    console.log(message);
}
log('taye diggs');
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const james = new Person(1, 'James');
// console.log(james.register());
// james.id = 5
//subClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const staff = new Employee(1, 'Tola', 'Developer');
// console.log(staff.register());
//generics
function getArray(items) {
    return new Array().concat(items);
}
const numArr = getArray([1, 2]);
const strArr = getArray(['xxx', 'yyy']);
// strArr.push('vvv')
