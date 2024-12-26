// Write a function check the array1 elements are present in the second array 

// const arrayAreEqual = (arr1, arr2) => {
//     if(arr1.length === arr2.length) {
//         return arr1.map((curElem,index) => curElem === arr2[index] ? true : false);
//     }
// }

//! Using Every Method

const arrayAreEqual = (arr1, arr2) => {
    if(arr1.length === arr2.length) {
        return arr1.every((curElem,index) => {
            return curElem === arr2[index];
        })
    }
}


console.log(arrayAreEqual([1,2,3],[1,2,3]));