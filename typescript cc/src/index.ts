let id: number = 6
let nickname: string = 'goke'
let isGood: boolean = true
let ids: number[] = [1, 2, 3]

let x: any = '2'
let arr: any[] = [1, "goke"]
//tuple
let person: [number, string, boolean] = [1, "goke", true]
//tuple array
let employee: [number, string][]

employee = [
    [1, 'wale'],
    [2, 'jill'],
    [1, 'tony']
]

// Composing Types
// With TypeScript, you can create complex types by combining simple ones. 
// There are two popular ways to do so: with unions, and with generics.

//union
let prodId: number | string


// enum
enum direction {
    up = 'Up',
    down = 'Down',
    left = 'Left',
    right= 'Right'
}

//two syntaxes for building types: Interfaces and Types.
//interfaces
interface UserInterface {
    readonly id: number, //readonly type
    name: string,
    age?: number //?: specify optional type
}

const user1: UserInterface = {
    id: 1,
    name: 'goke'
}

//interface with function
interface mathFunc {
    (x: number, y: number): number
}
const add: mathFunc = (x: number, y: number): number => x + y
const minus: mathFunc = (x: number, y: number): number => x - y

//types
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'goke'
}
    
// type assertion
    let cId: any = 1
    // let clientId = <number>cId 
    let clientId = cId as number

//function
function addNum (x: number, y: number) : number {
    return x + y
}
addNum(1, 3)

//void 
function log(message: number | string) : void {
    console.log(message)
}
log('taye diggs')

//classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    //private id: number ||private: property only aceessible within the class
    //protected id: number ||private: property can also only be aceessible within extended class
    id: number 
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is registered`
    }
}
const james = new Person(1,'James')
// console.log(james.register());
// james.id = 5

//subClasses
class Employee extends Person {
    position : string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}
const staff = new Employee(1,'Tola', 'Developer')
// console.log(staff.register());

//generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

const numArr = getArray<number>([1,2])
const strArr = getArray<string>(['xxx', 'yyy'])

// strArr.push('vvv')