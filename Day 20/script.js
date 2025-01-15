

/**
 //? * Write a function to reverse a string without using any built-in methods, function should take a string as input and return the reversed string  
 */


const reverseString = (str) => {
    // let arrStr = str.split("");
    // return arrStr;

    let reverse = ""

    for(let i = str.length-1; i>=0; i--) {
        reverse = reverse+str[i];
    }

    return reverse;
}

 console.log(reverseString("Aoudumber"));
 