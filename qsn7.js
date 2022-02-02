/*Q.7 Write a program to take a string input and sort it alphabetically.*/
const sortAlphabet = (str) => {
  let word = str.split("");
  let tmp;
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] > word[j]) {
        tmp = word[i];
        word[i] = word[j];
        word[j] = tmp;
      }
    }
  }
  return word.join("");
};
console.log(sortAlphabet("wicc winter bootcamp"));
