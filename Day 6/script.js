

//  Write a function to determine whether a given string is palindrome or not. A palindrome is word, phrase or other sequence of characters that reads the same as forward and backward, ignoring spaces, punctuation and capitalization

const isPalindrome = (str) => {
    str.toLowerCase().replace(/\W/g,"");
    let r_str = str.split("").reverse().join("");
     return str === r_str ? true : false;
}

console.log(isPalindrome("A Man, a plan, a canal, Panama"));
console.log(isPalindrome("Not a palindrome"));
console.log(isPalindrome("level"));

