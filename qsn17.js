/* Q.17 Write a program that reverse a number.*/
function reverseNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
console.log(reverseNum(987654321));
