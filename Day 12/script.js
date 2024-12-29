

//? Write a function that takes an array of integers as input and removes any elements, returning a new array with only the unique values.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)];
    // console.log(newArr);
    return newArr;

}


console.log(removeDuplicates([1,2,3,4,5,6,4,5]));