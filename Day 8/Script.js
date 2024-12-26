// How to finde factorail of number

// const findFactorial = (num) => {
//     for(let i = num-1; i >= 1; i--) {
//         num = num*i;
//     }

//     return num;
// }


// In another way 

const findFactorial = (num) => {
    let fact = 1;

    for(let i = 1; i<=num; i++) {
        fact = fact*i;
    }

    return fact;
}


// console.log("The Factorial is : "+findFactorial(5));

console.log("The Factorial is : "+findFactorial(3));