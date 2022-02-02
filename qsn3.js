/*q3. Write a program that takes a string input and find distinct characters in the string.
String: apple 
Expected Output: aple.*/

const distinctString = (str) => {
  let distinctLetters = [];
  const stringArray = str.split("");
  stringArray.forEach((item) => {
    if (!distinctLetters.includes(item)) {
      distinctLetters.push(item);
      console.log(item);
    }
  });
};
distinctString("apple");
