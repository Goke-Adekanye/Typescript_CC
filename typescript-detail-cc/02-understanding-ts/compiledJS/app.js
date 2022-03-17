"use strict";
//type number array
const addnumbers = (numbers) => {
    let result = 0;
    result = numbers.reduce((res, el) => {
        return res + el;
    }, 0);
    return result;
};
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = addnumbers(arrNum);
console.log(sum);
//type never 
function generateError(error, code) {
    throw { messag: error, code: code };
}
generateError('Authorized', 404);
