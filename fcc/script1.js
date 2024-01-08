// Functions in JS
// JS Prep 90 min: https://youtu.be/tbqVqP5ilzQ?si=DvGTXnULHuLctXj3 
// 1-9 Function definitions, IIFE, Scope, Hoisting 

// 1 Func declarations

function square(num){
  return num * num;
}

console.log(square(2));

// 2 Func expression 
// assign it to a variable using an anoyomous func
const square2 = function (num){
  return num * num;
}

console.log(square2(2));

// 3 First Class Functions
// Func treated like a variable and be passed.

function displaySquare3(fn) {
  console.log("Square is " + fn(5));
}

displaySquare3(square);

// 4. IIFE Immedicaly Invoked Function Expression

(function square4(num){
  console.log('IIFE: ', num * num);
})(3);

// 5 IIFE Output Based 
// example of an IIFE containing an inner IIFE
// searches in the innser scope then to the parent 'Closure'
// Closures
// The ability of a function to access variables & funcs that are
// lexically out of its scope.
// Closures are created when a new func is created as it has reference to outer scope

(function(x){
  return (function (y){
    console.log(x); // outputs 1
  })(2);
})(1);

// 6. Func scope

// global scope.
var num1=20, num2=3, name='Michael C';

function multiply() {
  return num1 * num2;
}

console.log(multiply()); // returns 60

// neseted func ex
function getScore(){
  var num1 = 2, num2=3;

  function add() {
    return name + " scored: " + (num1+ num2);
  }

  return add();
}

// Shadowing global scope - using the num1,num2 in the getScore and not the global variables
console.log(getScore());

// 7. Func scope Output based

// using var, it will just show 5 5x because we use var
// for(var i=0; i<5; i++){
//   setTimeout(function (){
//     console.log(i);
//   }, i * 1000);
// }


// // using let, it will just show 0-4
// for(let i=0; i<5; i++){
//   setTimeout(function (){
//     console.log(i);
//   }, i * 1000);
// }

// 8 Func hoisting
// Functions are hoisted as we call the func before the definition

functionName();
// w variables using var. Will not work w variables.
// undefined
console.log(x);

function functionName(){ 
  console.log('workattech');
}
var x=5;

// example 2 x is in the func but still undefined
functionName2();

function functionName2(){ 
  console.log(x);
  var x = 5;
  console.log('workattech');
}

// 9 Func Hoisting Output based
// z will it be local or global? 

var z = 21;

var fun = function (){ 
  console.log('fun(): ', z); // shows 20, but undef if we have it defined below
  var z = 20; 
}

fun();