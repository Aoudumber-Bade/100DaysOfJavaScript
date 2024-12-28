

// ? Write a function called isPowerOfTwo() that takes an integer num as input and return true if num is a power of two, and false otherwise.

const isPowerOfTwo = (num) => {
    let op = false; 
    for(let i = 0; i<num; i++) {
        if(2**i === num) {
            op = true;
        }
    }

    return op;
}

console.log(isPowerOfTwo(16)); // true
