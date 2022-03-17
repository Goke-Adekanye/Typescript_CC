function add(n1: number, n2: number){
    return n1 + n2
}

function addAndHandle(n1: number, n2: number, callback : (a:number)=>void ){
  const result = n1+n2;
  callback(result)
}

addAndHandle(10,20,(a:number)=>{console.log(a)})

function printResult(num: number): void {
   console.log("risultato: ",num);
}

let combineValues: (a:number, b:number)=>number  // a function that takes two numbers and returns a number

combineValues=add;

console.log(combineValues(3,4))

