/* Q.15 Write a program to check whether a given number is even or odd.*/
let isOddEven = (num) => {
  let result = num % 2 === 0 ? "It is even" : "It is odd";
  console.log(result);
};
isOddEven(1234567);
