/*Q.19 Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.*/

const longName = (name) => {
  return name.reduce(function (lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
};
console.log(longName(["Bermuda", "China", "Nepal", "Spain", "Italy"]));
