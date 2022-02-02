/* Q.13 Write a program to print the circumference and area of a circle of radius entered by the user*/

function circle(radius) {
  this.radius = radius;

  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };

  this.circumference = function () {
    return 2 * Math.PI * this.radius;
  };
}
let c = new circle(15);
console.log(c.area().toFixed(2));
console.log(c.circumference().toFixed(2));
