

//  - Write a function to calculate the averge from an array


const marks = [5,5,5,5];
let sum =0;
let avg =0;

// const calAvg = marks.reduce((avg, curElem, index) => {
//     sum = sum + marks[index];
//     avg = sum/marks.length-1;
//     return avg;
// },0)


// const calAvg = (marks) => {
//     let sum  = 0;
//     let avg = 0;

//     for(let i = 0; i<marks.length; i++) {
//         sum = sum + marks[i];
//         avg = sum/marks.length-1;
//     }

//     return avg;
// }


// Best Way ************************************************

const calAvg = (marks) => {
    let sum = marks.reduce((accum, curElem) => accum+curElem,0);

    return sum / marks.length;
}

console.log(calAvg(marks));