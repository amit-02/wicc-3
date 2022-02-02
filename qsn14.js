/* Q.14 A person is eligible to vote if his/her age is greater than or equal to 18. Write a program  to find out if he/she is eligible to vote.*/

let isEligible = (age) => {
  let result = age >= 18 ? "You are eligible" : "you are not eligible";
  console.log(result);
};
isEligible(8);
