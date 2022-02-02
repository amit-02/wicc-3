/*Qsn.1 Write a program to take a string input and display its length and last character.
 */
const word = "pushpa is fire";
const myFunction = (word) => {
  const lengthOfWord = word.length;
  const lastCharacterOfString = word.charAt(word.length - 1);
  console.log(lengthOfWord);
  console.log(lastCharacterOfString);
};
myFunction("pushpa is fire");
