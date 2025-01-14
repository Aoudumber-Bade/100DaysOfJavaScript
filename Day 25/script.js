


/**
 * 
 //! * Question - Write a function to calculate the factorial of a number.
 */

 const findFact = (num) => {

    if(num === 1) {
        return 1;
    }else {
        return num * findFact(num-1);
    }
}


console.log("The Factorial of a number is: "+findFact(5));