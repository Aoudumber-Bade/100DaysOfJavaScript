

/***
 //? * Write a functionn called truncateString that takes two parameters
 */



 const truncateString = (str, len) => {
   return len<=0 ? str : str.slice(0, len).concat("....");

 }

 console.log(truncateString("Aoudumber welcome to my new home",9));

//  const truncateString = (str, len) => {
//     let strNew = [];

//     for(let i = 0; i<len; i++) {
//         strNew.push(str[i]);
//     }

//     return `${strNew.join("")}...`;
//  }

//  console.log(truncateString("Aoudumber welcome to my new home",5));