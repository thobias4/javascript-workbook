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
console.log(typeof null)
// Undefined
console.log(typeof declaredButUndefinedVariable);

// Number
console.log(typeof 42);

// NaN
const isNaN = () => value === NaN;
  console.log(NaN);

// String
console.log(typeof 'hello');

// Write a JavaScript program that adds 2 numbers together.
const SumTwoNumbers=(num1, num2)=>{
  return num1 + num2
};
SumTwoNumbers(2, 2);

// Write a JavaScript program that runs only when 2 things are true.
const aﾠ = 1;
const a = 2;

if(aﾠ == 1 && a == 2) {
    console.log("true")
}

// Write a JavaScript program that runs when 1 of 2 things are true.
 const comp = ('Jay', null);
 const comp1 = 'Jay';
 const comp2 = null; 

function compare(comp1, comp2){
if(comp1 && comp2) {
        return 'true';
    } else {
        return 'not true';
    }
}  
    console.log(comp);
// Write a JavaScript program that runs when both things are not true.

const x = 4
const y = 1
const z = 0

function compare(x, y, z){
if (x==4 && (!(y==1) || z==0)
	    return 'true';
    } else {
     return 'not true';
}
