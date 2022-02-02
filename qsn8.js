/*Q.8 Write a program to check if the word 'orange' is present in the "This is orange juice".*/

const checkWord = (sentence, word) => {
  let s = sentence.split(" ");

  for (let i = 0; i < s.length; i++) {
    if (s[i] == word) {
      return console.log("the word is present");
    }
  }
  return console.log("the word is not present");
};
checkWord("This is orange juice", "orange");
