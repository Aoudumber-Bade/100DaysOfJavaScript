


//? Write a function that takes a string as input and returns the count of vowels  in that string. Consider 'a','e','i','o','u', and 'u' as vowels (both lowercase and upperCase)

const countVowels = (str) => {
  const vowels = ['a','e','i','o','u'];

  let arr = str.split("");

  let count = 0;

  for(let char of arr) {
    if(vowels.includes(char.toLowerCase())) {
        count++;
    }
  }

  return count;
  
}


console.log(countVowels("Hello World"));