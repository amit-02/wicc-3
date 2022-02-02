/*Q.23 What does the array.shift() and array.unshift method do? Write a program that uses both the methods.*/
/*Ans--> array.shift() is used to remove an element from the starting point of an array
    array.unshift() is used to add the element in sarting point of an array
*/
const shiftExample = () => {
  let myArray = ["grapes", "apple", "lemon", "pineapple", "banana", "orange"];
  myArray.shift();
  console.log(myArray);

  myArray.unshift("peach");
  console.log(myArray);
};
shiftExample();
