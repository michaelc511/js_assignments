// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK

// 1 Scopes

// global 
let globalVar = 'global';



function greet(){
  let funcVar = 'function';

  if(true){
    let blockVar = 'block';

    console.log('In if of func:' + blockVar);
    console.log('In if of func:' + funcVar);
    console.log('In if of func:' + globalVar);
  }
  console.log('In func:' + funcVar);
  console.log('In func:' + globalVar);
}

// greet();
// console.log('Global outside of func: ' + globalVar);

// 2 Hoisting

myFunc();

// function hoisting 
function myFunc(){
  console.log('func');
}

// var ariable hoisting - only works w 'var'
x = 10;
console.log(x);
var x;

// Chapter 2 Variables & Datatypes

// 3 variables

// func-scope 'var count' works in all of func

function ex1(){
  if(true){
    var count = 33;
    console.log(count);
  }
  console.log(count);
}

ex1();

// block-scope
function ex2(){
  if(true){
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
let oddNums = [1,3,5];

// obj
let person = {
  name: "Jay",
  age: 30,
  grades: ['a','b','c'],
  greet: function() { console.log(this.name)}
}

// 6 typeof

console.log(typeof age)

// 7 type coercian 

let str = "42";
let num = 42;
let boolean = true;
let nullVal = null;

console.log(str + num); // "4242"
console.log( num + boolean ); // 43
console.log( num == str ); // true
console.log(boolean == 1 ); // true
console.log(boolean + nullVal ); // 1

// Ch 3 Operators and Conditions

// 8 Operator PRecedence BODMAS (Brackets, order, div, multi, add, subtract)

let a = 6;
let b = 3;
let c = 2;

let result = a + b * c + (a - b);

console.log(result); 15

// 9 Unary, binary and Ternary

// unary

let a9 = 5; 
let b9 = a;
a9++;

// binary 
a9+y

// ternary 
let tResult = true ? 'Yes' : 'No';

// 10 short circuit

let result10 = false && someFunction();
console.log(result10); // return false, ignore the right

let result10a = true || someFunction();
console.log(result10a); // returns true, ignore the right