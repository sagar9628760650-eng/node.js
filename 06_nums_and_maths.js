const score = 500
console.log(score);

const balence = new Number(1000); // it is a number object
console.log(balence);

console.log(balence.toString().length); //it gives the length of the number
console.log(balence.toFixed(2));  // it gives the number with 2 decimal places

const num1 = 10.12300;
console.log(num1.toPrecision(4)); // it gives the number with 4 significant digits

const num2 = 105372.82773586
console.log(num2.toExponential(3)); // it gives the number in exponential form with 3 decimal places
console.log(num2.toLocaleString('en-IN', { maximumFractionDigits: 5 })); // it gives the number in exponential form with 5 decimal places
console.log(num2.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })); // it gives the number in currency format

//++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5)); // it converts the negative number to positive
console.log(Math.round(4.7)); // it rounds the number to the nearest integer
console.log(Math.floor(4.7)); // it rounds the number down to the nearest integer
console.log(Math.ceil(4.7)); // it rounds the number up to the nearest integer
console.log(Math.min(4, 7, 1, 9, 2)); // it gives the minimum number from the given numbers
console.log(Math.max(4, 7, 1, 9, 2)); // it gives the maximum number from the given numbers
console.log(Math.random()); // it gives a random number between 0 and 1
console.log(Math.random() * 100); // it gives a random number between 0 and 100
console.log(Math.random() * 100+35); // it gives a random number between 35 and 135
console.log(Math.floor(Math.random() * 100)); // it gives a random integer between 0 and 100.

const max = 100;
const min = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) +min); // it gives a random integer between 50 and 100