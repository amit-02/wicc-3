/*Q.5 Write a program that takes the string input and reverse the string and print it.*/
const reverseString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};
console.log(reverseString("pushpa is dangerous"));
