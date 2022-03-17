
enum Role {
    ADMIN=5, READ_ONLY=12, WRITE=18  //
}

//type object
const person:{
    name: string; //type string
    age: number; //type number
    hobbies: string[]; //type string array
    role: Role, //type enum
    detail: [number, string] //type tuple
} = {
  name: "matteo",
  age: 25,
  hobbies: ["cooking","dogo","atomic"],
  role: Role.WRITE,
  detail: [12, 'dev']
  };

// person.detail = [13, 'dev']
// person.detail[1] = 'fff'
// person.detail = [13, 'dev', 'fff'] XXXXXX


console.log(person.name, person.age, person.hobbies[1].toUpperCase(), person.role);

