/*Q.28 Write a program that finds a  random number from a given array.*/

const randomNumber = (arrayList) => {
  return arrayList[Math.floor(Math.random() * arrayList.length)];
};

console.log(randomNumber([2, 3, 5, 6, 7, 8, 9, 12, 12, 11, 10, 6, 7, 8, 44]));
