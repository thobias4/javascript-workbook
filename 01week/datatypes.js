'use strict'

// Write a JavaScript program to display the current day and time.
const todaysDate = new Date();
 console.log(todaysDate);

// Write a JavaScript program to convert a number to a string.
const num = 15
const a = num.toString();
  console.log(a);

// Write a JavaScript program to convert a string to the number.
const text = '30px';
const integer = parseInt(text, 10);
  console.log(integer);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
console.log(typeof true);
// Null

// Undefined
console.log(typeof declaredButUndefinedVariable);

// Number
console.log(typeof 42);

// NaN
const isNull = () => value === null;
  console.log(isNull);

// String
console.log(typeof 'hello');

// Write a JavaScript program that adds 2 numbers together.
const SumTwoNumbers=(num1, num2)=>{
  return num1 + num2
};
SumTwoNumbers(2, 2);

// Write a JavaScript program that runs only when 2 things are true.

function testNum(all) {
  if (all > 0) {
    return "Good";
  } else {
    return "Not Good";
  }
}
console.log(testNum(5));
// Write a JavaScript program that runs when 1 of 2 things are true.
 const comp = ('Jay', null);
 const comp1 = 'Jay';
 const comp2 = null; 

function compare(comp1, comp2){
if(comp1 && comp2) {
        return 'true';
    }
}  
    console.log(comp);
// Write a JavaScript program that runs when both things are not true.