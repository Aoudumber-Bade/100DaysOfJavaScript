

/**
 //? * Write a function called calculateMean that takes an array of numbers as input and return the mean(average) of these numbers.
 */

//  Using Common Js 

//  const calculateMean = (numbers) => {
    
//     let sum = 0;
//     if(numbers.length === 0) {
//         return 0;
//     }

//     for(let num of numbers) {
//         sum+=num;
//     }

//     return sum/numbers.length;
//  }


// Using ES6 

const calculateMean = (numbers) => {
    
        if(numbers.length === 0) {
            return 0;
        }
    
        return numbers.reduce((curElem, accum) => accum+curElem, 0) / numbers.length;
       
     }
    

 console.log(calculateMean([1,2,3,4,5]));
 console.log(calculateMean([10,20,30]));
 console.log(calculateMean([-1,0,1]));
 console.log(calculateMean([]));