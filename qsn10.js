/*Q.10.Write a program to return a string with the characters of the odd index position from a given string. */

const oddIndexPosn = (string) => {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      output += string[i];
    }
  }
  return output;
};

console.log(oddIndexPosn("javascript"));
