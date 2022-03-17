//type number array
const addnumbers = (numbers:number[]) => {
    let result = 0;
    result = numbers.reduce((res,el)=> {
        return res + el
    }, 0)

    return result
  }
  
  let arrNum = [1,2,3,4,5,6,7,8,9,10]
  let sum = addnumbers(arrNum);
  console.log(sum);

//type never 
function generateError(error:string,code:number):never {

    throw {messag:error,code:code};  
} 
generateError('Authorized', 404)