

// ? Write a function to convert a string to camelCase & snake_case;

const convertString = (str) => {
    return str.trim().split(" ").map((curElem,index) => {
        if(index===0) {
            return curElem;
        }else{
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
     }).join("");
     
}

console.log(convertString("Welcome to my new site"));
