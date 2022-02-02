/*Q.11 Write a program to test if a given string contains only numbers and returns true or false.*/
const onlyDigits = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    const d = str.charCodeAt(i);
    if (d < 48 || d > 57) {
      return false;
    }
  }
  return true;
};
console.log(onlyDigits("34pushpa2"));
