

//? Write a function to check if a given string start with a specific substring


const isSubString = (str, subStr) => {
    return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}

console.log(isSubString("Hello, World!","hello"));