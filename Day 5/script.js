

const numbers = [4,2,7,1,9,5];

const sortNumbersInAsscending = numbers.sort((a,b) => {
    return a - b;
})

sortNumbersInAsscending.map((elem) => {
    console.log(elem);
    
});