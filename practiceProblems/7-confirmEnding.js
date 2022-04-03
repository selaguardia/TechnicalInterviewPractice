//! Confirm the Ending

// if & .endsWith
function confirmEnding(str, target) {
  if (str.endsWith(target)) {
    return true
  }
  return false
}
console.log(confirmEnding("Bastian", "n"));

// .endsWith
function confirmEnding(str, target) {
  return str.endsWith(target);
}
console.log(confirmEnding("Bastian", "n"));

// if & .substr
function confirmEnding(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  }
  return false
};
console.log(confirmEnding("Bastian", "an"));

// .substr
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
console.log(confirmEnding("Sergio", "io"));

// .slice
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
console.log(confirmEnding("Sergio", "io"));