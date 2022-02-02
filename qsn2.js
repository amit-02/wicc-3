/*Q.2 Write a program to count occurrences of a certain character in a given string*/

const countString = (str, character) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == character) {
      counter += 1;
    }
  }
  return counter;
};
console.log(countString("pushpa", "p"));
