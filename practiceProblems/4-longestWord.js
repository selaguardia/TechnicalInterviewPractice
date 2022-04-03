
//? REMEMBER
// Prints indexes
for (fruit in fruits) {
  console.log(fruit);
}

// Prints the elements
for (fruit of fruits) {
  console.log(fruit);
}


//! Find the longest word
function findLongestWordLength(str) {
  let words = str.split(' ');
  let longest = '';
  console.log(words);
  for (let word of words) {
    console.log(word)
    if (word.length > longest.length) {
      longest = word;
      console.log('longest===>',longest)
    }
  }
  return longest.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


//! Find the longest word in one line
function findLongestWordLength(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
