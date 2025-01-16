

/***
 //? *  Write a function called repeatString that takes two parameters:
 */



 const repeatString = (str, num) => {
   return num > 0 ? str.repeat(num) : str;
 }

 console.log(repeatString("abc",5));


 //* Second Way

 
//  const repeatString = (str, num) => {
//     let str2 = [];

//     for(let i = 1; i<=num; i++) {
//         str2.push(str);
//     }

//     return str2.join("");
//  }

//  console.log(repeatString("aoudumber",5));