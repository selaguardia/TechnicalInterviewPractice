/* 
- Divide & Conquer == should tip you off that you will be using some type of recursion
- Merge Sort is one of the most efficient ways to sort a list

- unlike bubble sort we dont have to compare every item, just their local list to eachother
 
?- Time Complexity: 
  Best:     O(n log n)
  Average:  O(n log n)
  Worst:    O(n log n)

?- Space Complexity: 
  Worst:    O(n)

*/
// const numbers = [6,5,3,1,8,7,2,4]
const numbers = [99,44,6,2,1,5,63,87,283,4,0];

function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }
  // split array into right and left

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left',left);
  // console.log('right',right);
 
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result =[];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right)
  // console.log(left, '-------goes to the left');
  // console.log(right, '-------goes to the right');
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const answer = mergeSort(numbers);
console.log(answer);
