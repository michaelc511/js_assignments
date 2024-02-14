// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK
// Google Notes: https://docs.google.com/document/d/e/2PACX-1vScDUMqQCttLaaJBnHu1TsnlLhYyBTmJt8k7C-x9jJWzj63E7lXe_DWIXXaFPV6dhT470Nx2HG-Bj1l/pub

/// Chap 1 Intro 1-10 //////////////////////////////////////////////

// a function that calculates the day between two dates
function daysBetweenDates(date1, date2) {
  // get difference in milliseconds
  let diff = date1 - date2;
  // convert to days
  return diff / (1000 * 60 * 60 * 24);
}

// generate a function to reverse a string and show multiple ways to do it
function reverseString(str) {
  // split string into array of chars
  let charList = str.split("");
  // reverse array
  let reversedCharList = charList.reverse();
  // join array into string
  let reversedStr = reversedCharList.join("");
  // return string
  return reversedStr;
}

// now use it
console.log(reverseString("hello"));
  
 



  

// function that calculates the day between two dates
/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} The number of days between date1 and date2.
 */
function daysBetweenDates(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    throw new Error('Both date1 and date2 must be Date objects');
  }

  // Get the difference in milliseconds
  const diff = date1 - date2;

  // Convert the difference from milliseconds to days
  // There are 1000 milliseconds per second, 60 seconds per minute,
  // 60 minutes per hour, and 24 hours per day
  return diff / (1000 * 60 * 60 * 24);
}



function greet() {
  let funcVar = "function";

  if (true) {
    let blockVar = "block";

    console.log("In if of func:" + blockVar);
    console.log("In if of func:" + funcVar);
    console.log("In if of func:" + globalVar);
  }
  console.log("In func:" + funcVar);
  console.log("In func:" + globalVar);
}

// greet();
// console.log('Global outside of func: ' + globalVar);

// 2 Hoisting

myFunc();

// function hoisting
function myFunc() {
  console.log("func");
}

// var ariable hoisting - only works w 'var'
x = 10;
console.log(x);
var x;

// Chapter 2 Variables & Datatypes

// 3 variables

// func-scope 'var count' works in all of func

function ex1() {
  if (true) {
    var count = 33;
    console.log(count);
  }
  console.log(count);
}

ex1();

// block-scope
function ex2() {
  if (true) {
    let count = 33;
    console.log(count);
  }
  // will break using 'let'
  // console.log(count);
}

ex2();

// const
const z = 33;
// will break
// z=35;
console.log(z);

// 4 datatypes
let age = 25;
let msg = "hi";
let isTrue = true;
//undefined
let x4;
console.log(x4);

//null
let y = null;
console.log(y);

// 5 prim vs non-prim types

//prim
let age5 = 25;

// non prims
// array
let oddNums = [1, 3, 5];

// obj
let person = {
  name: "Jay",
  age: 30,
  grades: ["a", "b", "c"],
  greet: function () {
    console.log(this.name);
  },
};

// 6 typeof

console.log(typeof age);

// 7 type coercian

let str = "42";
let num = 42;
let boolean = true;
let nullVal = null;

console.log(str + num); // "4242"
console.log(num + boolean); // 43
console.log(num == str); // true
console.log(boolean == 1); // true
console.log(boolean + nullVal); // 1

// Ch 3 Operators and Conditions

// 8 Operator PRecedence BODMAS (Brackets, order, div, multi, add, subtract)

let a = 6;
let b = 3;
let c = 2;

let result = a + b * c + (a - b);

console.log(result);
15;

// 9 Unary, binary and Ternary

// unary

let a9 = 5;
let b9 = a;
a9++;

// binary
a9 + y;

// ternary
let tResult = true ? "Yes" : "No";

// 10 short circuit

let result10 = false && someFunction();
console.log(result10); // return false, ignore the right

let result10a = true || someFunction();
console.log(result10a); // returns true, ignore the right
