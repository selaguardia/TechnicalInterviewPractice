// .repeat method
function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  return str.repeat(num);
}
// console.log(repeatStringNumTimes('Sergio', 9));

// Using for loop
function repeatStringNumTimes2(str, num) {
  let final = '';
  if(num < 0) return '';

  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}
// console.log(repeatStringNumTimes2('Sergio', 2));

// Using recursing
function repeatString(str, num) {
  if(num <= 0) return '';
  if (num === 1) return str; // base case

  return str + repeatString(str, num -1);
}
console.log(repeatString('abc', 0))