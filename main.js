//! VAR VS LET
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
console.log('------1------')
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

console.log('------2------')
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

console.log('------4------')
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);


//! While Loop
// it runs while a specified condition is true and stops once that condition is no longer true.
// Logs 0-4
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray)


// Logs 5-0
const myArray = [];
let i = 5;

while (i >= 0 ) {
  myArray.push(i);
  i--;
}
console.log(myArray)


//! For Loops
// For loops are declared with three optional expressions separated by semicolons:
// for (a; b; c), 
// == a is the initialization statement
// == b is the condition statement
// == c is the final expression

const myArray2 = [];

for (let i = 1; i <= 5; i++) {
  myArray2.push(i);
}
console.log(myArray2)