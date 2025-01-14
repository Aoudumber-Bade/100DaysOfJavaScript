



/***
 * Q. Write a function called findMode that takes an array of number as input and returns the mode of the array. 
 */


const findMode = (arr) => {
    let counts = {};
    let maxNum = 0;
    let mode;

    for(let elem of arr) {
        counts[elem] = (counts[elem] || 0) +1;
        if(counts[elem] > maxNum) {
            maxNum = counts[elem]
            mode = elem;
        }

    }
    return mode;
}

console.log("Mode Is : ",findMode([1,2,3,1,2,42,1,5,6,7,3,4]));
