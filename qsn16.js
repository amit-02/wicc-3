/* Q.16 Write a program that displays all the odd numbers from the range entered by the user. */
let start = 15,
  end = 25;
let odd = function (num) {
  return num % 2 !== 0;
};

let range = function (start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
};
let numArray = range(start, end);
numArray.filter(odd);
console.log(numArray.filter(odd));
