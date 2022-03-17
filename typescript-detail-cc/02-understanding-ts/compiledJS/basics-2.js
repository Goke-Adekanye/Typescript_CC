"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 12] = "READ_ONLY";
    Role[Role["WRITE"] = 18] = "WRITE"; //
})(Role || (Role = {}));
//type object
const person = {
    name: "matteo",
    age: 25,
    hobbies: ["cooking", "dogo", "atomic"],
    role: Role.WRITE,
    detail: [12, 'dev']
};
// person.detail = [13, 'dev']
// person.detail[1] = 'fff'
// person.detail = [13, 'dev', 'fff'] XXXXXX
console.log(person.name, person.age, person.hobbies[1].toUpperCase(), person.role);
