// Create a function that reverses a string
const phrase = 'Reverse this sentence';

// Method 1:
const reverseString = str => str.split("").reverse().join("");
console.log(reverseString(phrase));

// Method 2:
const reverseString2 = str => [...str].reverse().join("");
console.log(reverseString2(phrase));

// Method 3:
const reverseString3 = (str) => {
  // check input
  if(!str || str.length < 2 || typeof str !== 'string') {
    console.log(`Woohoo`)
    return `hmm.. somethings not adding up. Check your input`
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards)
  return backwards.join('');
}
console.log(reverseString3(phrase));