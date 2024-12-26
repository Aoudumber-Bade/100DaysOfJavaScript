/**
 * Question 1 - Write a function findLongestWord that takes a string as input and returns the longest word in the string. if there are multiple longest words, return the first one encountered.
 */

const findLongestWord = (str) => {
    if(str.trim().length===0) {
        return false;
    }

    words = str.split(" ");
    words = words.sort((a,b)=>{return a.length-b.length});

    console.log(words);
    
};

console.log(
    findLongestWord("This is a test string")
);