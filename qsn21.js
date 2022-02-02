/*Q.21 Write a program that takes input as an input and pushes all strings to an array.
Eg: stringToarray(“hello”)
Expected Output: [“h”, “e”, “l”, “l”, “o”]*/

const stringToArray = (str) => {
  let newArray = str.split("");
  console.log(newArray);
};
stringToArray("pushpa");
