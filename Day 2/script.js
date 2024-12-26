

/**
 * Programming Question : HashTag Generator
 */


const hashTagGenerator = (name) => {
    if(name.length >= 280 || name.trim().length === 0) {
        return false;
    }

    name = name.split(" ");

    // return name;

    name = name.map((curElem) => {
        // First Way 
        // return curElem.replace(curElem[0], curElem[0].toUpperCase());

        // 2nd Way 
        return curElem.charAt(0).toUpperCase() + curElem.slice(1);
    })

    name = name.join("");

    return `#${name}`;

    
}




console.log(hashTagGenerator("my name is aoudumber"));