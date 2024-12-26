


/**
 * Question : Write a function called countChar that takes two parameters: a string and a character to count. The Function should return the number of times the specified character appears in the string.
 */


const countChar = (word, char) => {

    word = word.toLowerCase();
    char = char.toLowerCase();

    let count;

    count = word.split("").reduce((accumlator, curChar) => {
        if(curChar === char) accumlator++
        return accumlator;
    }, 0)

    return count;

}


console.log(countChar("MissiSippi", "s"));