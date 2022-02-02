/*Q.6 Write a program to find the number of uppercase and lower case characters in a string.*/
const caseCount = (str) => {
  let upperCase = 0,
    lowerCase = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      upperCase++;
    } else if (str[i] >= "a" && str[i] <= "z") lowerCase++;
  }
  console.log(upperCase);
  console.log(lowerCase);
};
caseCount("Pushpa Is Fire");
