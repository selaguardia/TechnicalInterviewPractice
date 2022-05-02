// The Array object is used to store multiple values in a single variable:
const cars = ["Saab", "Volvo", "BMW"];

//!..........................................................................................................................................

concat() // Joins two or more arrays, and returns a copy of the joined arrays //? No change to existing array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2,arr3);

//!..........................................................................................................................................

every() // Checks if every element in an array pass a test, returns true or false //? No change to original array
const ages = [32, 33, 16, 40];
ages.every(checkAge)
function checkAge(age) {
  return age > 18;
}

//!..........................................................................................................................................

filter() // Creates a new array with every element in an array that pass a test //? No change to original array
const ages2 = [32, 33, 16, 40];
const result = ages2.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}

//!..........................................................................................................................................

find() // Returns the value of the first element in an array that pass a test //? No change to original array
const ages3 = [3, 10, 18, 20];
function checkAge(age) {
  return age > 18;
}
const results = ages3.find(checkAge);

//!..........................................................................................................................................

findIndex() // Returns the index of the first element in an array that pass a test, -1 if no match is found. //? No change to original array
const ages4 = [3, 10, 18, 20];
ages4.findIndex(checkAge);
function checkAge(age) {
  return age > 18;
}

//!..........................................................................................................................................

forEach() // Calls a function for each array element //? No change to original array
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

//!..........................................................................................................................................

includes() // Check if an array contains the specified element //? No change to original array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.includes("Banana", 3); // 3 is the starting index

//!..........................................................................................................................................

indexOf() // Search the array for an element and returns its position //? No change to original array
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits3.indexOf("Apple", 3); // 3 is the starting index

//!..........................................................................................................................................

join() // Joins all elements of an array into a string //? No change to original array
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits4.join(); // Any separator can be specified. The default is comma (,)

//!..........................................................................................................................................

map() // Creates a new array with the result of calling a function for each array element //? No change to original array
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}

//!..........................................................................................................................................

pop() // Removes the last element of an array, and returns that removed element //? Changes the origial array
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.pop();

//!..........................................................................................................................................

push() // Adds new elements to the end of an array, and returns the new length //? Changes the origial array
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.push("Kiwi", "Lemon");

//!..........................................................................................................................................

reduce() // Reduce the values of an array to a single value (going left-to-right) //? No change to original array
const numbers5 = [15.5, 2.3, 1.1, 4.7];
numbers5.reduce(getSum, 0);
function getSum(total, num) {
  return total + Math.round(num);
}

//!..........................................................................................................................................

reverse() // Reverses the order of the elements in an array //? Changes the orignal array
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.reverse(); 

//!..........................................................................................................................................

shift() // Removes the first element of an array, and returns that element //? Changes the orignal array
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.shift();

//!..........................................................................................................................................

slice() // Selects a part of an array, and returns the new array //? No change to original array
const fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits9.slice(1, 3); // method selects from a given start, up to a (not inclusive) given end.

//!..........................................................................................................................................

some() // Checks if any of the elements in an array pass a test //? No change to original array
const ages7 = [3, 10, 18, 20];
ages7.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

//!..........................................................................................................................................

sort() // Sorts the elements of an array //? Changes the orignal array
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.sort();

//!..........................................................................................................................................

splice() // Adds/Removes elements from an array //? Changes the orignal array
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.splice(2, 0, "Lemon", "Kiwi");
//array.splice(index, howmany, item1, ....., itemX)
// howmany: Number of items to be removed.
// item1: New elements to be added

//!..........................................................................................................................................

toString() // Converts an array to a string, and returns the result //? No change to original array
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
let text12 = fruits12.toString();

//!..........................................................................................................................................

unshift() // Adds new elements to the beginning of an array, and returns the new length //? Changes the orignal array
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
fruits13.unshift("Lemon","Pineapple");

//!..........................................................................................................................................