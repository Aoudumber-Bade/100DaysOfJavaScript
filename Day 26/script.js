/**
 * 
 //! * Fibonacci Series 
 */


 const fibnacci = (num) => {
    if(num<=1) {
        return num;
    }
    else {
        return fibnacci(num-1) + fibnacci(num-2);
    }
 }

 console.log(fibnacci(0));
 console.log(fibnacci(1));
 console.log(fibnacci(2));
 console.log(fibnacci(3));
 console.log(fibnacci(4));
 console.log(fibnacci(5));
 console.log(fibnacci(6));
 