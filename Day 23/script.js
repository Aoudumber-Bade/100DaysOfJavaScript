

/***
 * 
 * 
 */


const countOcc = (numbers) => {
    const count = {};

    for(let elem of numbers) {
        count[elem] = (count[elem] || 0) +1;
    }
    return count;
}


const numbers = [1,2,2,4,4,4,4,3,1,4,2]

console.table(countOcc(numbers));