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

//! Events
// Real interactivity on a website requires event handlers. These are code structures that listen for activity in the browser, and run code in response. The most obvious example is handling the click event, which is fired by the browser when you click on something with your mouse.

//! Iterators
/*
.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

.map() executes the same code on every element in an array and returns a new array with the updated elements.

.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of the elements and returns a single value.
*/





/*
? Maps/Dictionaries:
- Maps (also known as Dictionaries) are data structures stores a collection of key-value pairs. Each key is unique and allows for quick access to values. A real life example of a map could be storing the grades for students in a class (student name is key, grade is value).

? LinkedList
- Linked Lists, similar to arrays, are a data structure that allow you to store a collection of items in a specific order. Unlike arrays, elements in a linked list are not stored at contiguous memory locations and are instead stored in nodes that are linked using pointers.

? Trees
- Trees are a common non-linear data structure. They don’t store data in a linear way, but instead organize hierarchically. A tree is normally represented by nodes which contain a value and point to other nodes.

? Stacks & Queues
- Stacks are a data structure that store a collection of items that inserted and removed according to the last-in first-out (LIFO) principle.
- Similarly, Queues store items according ot the first-in first-out (FIFO) principle.

? Heaps
- A heap is a tree-based data structure that usually comes in two varieties: (1) Max-heaps where the the value in any node is greater than all the values in it's child nodes and (2) Min-heaps where the value in any node is less than all of the values in it's child nodes.

? Graphs
- Graphs are a non-linear data structure considering of nodes and edges (which connect pairs of nodes). Graphs are used to solve many real-life problems and are often used to represent networks (e.g. friends on a social network).

? Runtime Analysis
- Runtime analysis allows us to measure how efficient code is. Runtime anlaysis is generally done using Big-O notation, which represents how fast code will run in the worst case.

? Searching & Sorting
- Searching algorithms are used to Sorting algorithms are used to rearrange a list of elements so that they're in a speciified order (e.g. sorting numbers to go from highest to lowest).

? Recursion & DP
- Recursive algorithms involve a function calling itself in order to solve a smaller version of a problem. Similarly, dynamic programing algorithms break down problems into subproblems in order to solve a larger problem. Although the two concepts aren't exactly the same, dynamic programming solutions are often implemented recursively.
*/