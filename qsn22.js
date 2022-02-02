/*Q.22 Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. */

const last = (array, n) => {
  if (array == null) {
    return 0;
  }
  if (n == null) {
    return array[array.length - 1];
  }
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([3, 0, 3, 1]));
console.log(last([3, 0, 3, 1], 3));
console.log(last([3, 0, 3, 1], 6));
