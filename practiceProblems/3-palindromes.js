//! Palindromes Check

function palindrome(str) {
  let reg = /[\W_]/g;
  let smallStr = str.toLowerCase().replace(reg, '');

  let reversed = smallStr.split('').reverse().join('');

  if(smallStr == reversed) {
    return true;
  }
  return false;
}
console.log(palindrome('never odd or even'));

