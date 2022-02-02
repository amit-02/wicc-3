/* Q.26 Write a JavaScript program to calculate age from date of birth */

const age = (dob) => {
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

console.log(age(new Date(1996, 01, 01)));
