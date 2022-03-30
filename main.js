//! VAR VS LET
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
// console.log('------1------')
// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// console.log('------2------')
// var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// console.log('------4------')
// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

//! Reverse a string
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

//! Factorialize a number
// function factorialize(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorialize(5))

//! Palindromes Check
// function palindrome(str) {
//   let reg = /[\W_]/g;
//   let smallStr = str.toLowerCase().replace(reg, '');

//   let reversed = smallStr.split('').reverse().join('');

//   if(smallStr == reversed) {
//     return true;
//   }
//   return false;
// }
// console.log(palindrome('never odd or even'));

//? REMEMBER
// Prints indexes
// for (fruit in fruits) {
//   console.log(fruit);
// }

// Prints the elements
// for (fruit of fruits) {
//   console.log(fruit);
// }


//! Find the longest word
// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let longest = '';
//   console.log(words);
//   for (let word of words) {
//     console.log(word)
//     if (word.length > longest.length) {
//       longest = word;
//       console.log('longest===>',longest)
//     }
//   }
//   return longest.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//! Find the longest word in one line
// function findLongestWordLength(str) {
//   return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//! Title case a sentence
// function titleCase(str) {
//   let words = str.toLowerCase().split(' ');
  
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(' ');
// }
// console.log(titleCase("I'm a little tea pot"))

//! Title case a sentence (2nd way)
// function titleCase(str) {
//   let titled = str.toLowerCase().split(' ').map(function(elem) {
//     return elem[0].toUpperCase() + elem.slice(1);
//   })
//   return titled.join(' ')
// }
// console.log(titleCase("I'm a little tea pot"))

//! Return Largest Numbers in Arrays
// function largestOfFour(arr) {
//   let maxes = [];
//   for (let i = 0; i< arr.length; i++) {
//     let tempMax = arr[i][0];
//     for (var j = 0; j < arr[i].length; j++) {
//       let currentElement = arr[i][j];
//       if (currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxes.push(tempMax)
//   }
//   return maxes;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

//! Confirm the Ending
function confirmEnding(str, target) {
  if (str.endsWith(target)) {
    return true
  }
  return false
}
console.log(confirmEnding("Bastian", "n"));

