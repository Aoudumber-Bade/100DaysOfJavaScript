

//? Write a function that takes a number as input and return the sum of number.

const sumOfDigits = (num) => {
    let numArray = Array.from(String(num), Number);

    return numArray.reduce((accum, curElem) => accum = accum+curElem,0);
}

console.log(sumOfDigits(1234)); //* 1+2+3+4 = 10