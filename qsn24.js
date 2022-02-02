/*Q.24 Write a JavaScript function to get the month name from a particular date.*/
const monthName = (dateOfMonth) => {
  monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthList[dateOfMonth.getMonth()];
};
console.log(monthName(new Date("01/01/1996")));
