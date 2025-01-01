

/// ? : Write a function to check if a character is uppercase or lowercase

// const isUpperCase = (char) => {
//     if(char.charCodeAt(0) >=65 && char.charCodeAt(0) <= 90) {
//         return true;
//     }
//     return false;
// }

// Another Way 

const isUpperCase = (char) => {
    return char === char.toUpperCase();
}


console.log(isUpperCase('s'));
console.log(isUpperCase('T'));

