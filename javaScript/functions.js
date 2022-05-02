/*
Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code.
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
*/

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}


//! Arrow Functions (ES6)
let myFunction = (a, b) => a * b;
console.log(myFunction(5,4))

const hello = () => {
  return "Hello World!";
}
console.log(hello());