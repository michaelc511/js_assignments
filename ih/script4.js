// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK


/// Chap 6 Functions //////////////////////////////////////////////

// 31 function definition

function sum(a,b){ // func keyword, func name, (parameter list)
  let c = a+b;  // func body
  return c;     // return
}

console.log('31 func', sum(1,2) ); // func call (argument list)

// 32 Named vs anonymous func

// anonymous func - no name identifier

console.log(function (a,b) {
  return a,b;
}(3,4));

// 33 func expression

// named func

const add= function sum(a,b){ // func keyword, func name, (parameter list)
  let c = a+b;  // func body
  return c;     // return
}
console.log('33 func exp', add(1,2) );  

// anonymous func

const add2 = function(a,b){
  return a+b;
}
console.log('33 func exp anony', add2(1,2) ); // func call (argument list)

// 34 arrow func

// const add4 = (x,y) => { return x+y}; 
// const add4 = (x,y) => (x+y); 
const add4 = (x,y) => x+y; // shortest way w 2 params and 1 return
// const add4 = x => x+3; // with 1 param and 1 return, no need for '()' and '{}' 

console.log('34 arrow func', add4(1,2) );  

// 35 Callback func - func passes as an arg
// higher order - func taking in the callback func
const subtract = function(a,b){
  return a-b;
}

const multiply = function(a,b){
  return a*b;
}

function display(x,y, operation){
  let result = operation(x,y); // could be add(), subtract(), multiply(), etc
  console.log('35 high order using callback', result );
}

display(10,2, add);
display(10,2, subtract);
display(10,2, multiply);

// 36 higher order func

function hof(func){ // hof
  func();
}

function sayHi(){ // callback func 
  console.log('36 hof hi');
}

hof(sayHi); // hof arg of func

// 37 returning a func as a result

function createAdder(number){ // hof takes in number, returns a function
  return function(value){
    return value + number;
  }
}

const addFive = createAdder(5);

console.log('37 hof return func', addFive(2));

// 38 params vs args

function add8(a,b) { // a and b are parameters
  console.log('38 param vs args');
}

add8(3,4); // 3 and 4 are arguments 

// 39 Passing args to a function

// 39.1 positional
function add9(a,b){
  console.log(a+b);
}

add9(3,5);

// 39.2 named args

const person = {
  name:"Larry",
  role: 'engineer'
}

function greet(person){
  console.log('39 obj passed', person.name + " " + person.role);
}

greet(person);

// 39.3 arguments object

sum9(1,2,3);

function sum9(){
  console.log(arguments[0], arguments[1], arguments[2], arguments.length);

}

// 40 default parameters

function greet(name ="Moe"){
  console.log('40 default params', name);
}

greet(); 
greet('Curly');

// 41 Funcs as first class citizen

// 41.1 assignable
const myFunc = function (a){
  console.log('41 assignable func and passed as arg', a);
}

// 41.2 pass as args
function performOperation(myFunc, value){
  return myFunc(value);
}

performOperation(myFunc, 0);

// 41.3 return as values

function simpleFunc(){
  return function(){
    console.log('41 return func' )
  }
}

const theFunc = simpleFunc(); // calling it will not work, need to assign it to a func for the return 
theFunc();

// 42 pure vs impure funcs

// pure is same output for the same input, not mod state and not have side effects

function add42(a,b){
  return a+b;
}

console.log('42 pure', add42(3,4));

console.log('42 pure', add42(3,4));

console.log('42 pure', add42(3,4));

// impure produce diff outputs for the same input, affect state and have side effects 
let total = 0;

function addTot(value){
  total += value;
  return total;
}

console.log('42 impure:', addTot(1));

console.log('42 impure:', addTot(1));
console.log('42 impure:', addTot(1));

// 43 Function currying

function multiply4(a,b){
  return a * b;
}


function curriedMultiply(a){
  return function(b) {
    return a * b;
  }
}

const double = curriedMultiply(2);
console.log('43 Curried ex:', double(5));  // 2 * 5 = 10

// define a func using 'this' context and an arg
function sayHello(msg){
  // console.log(`${msg}, ${this.name}`); 
  console.log('Name', msg, this.name)
}

const person4 = {name: 'Tony'};

// 44 Call - use the 'call' method to invoke the func with a specific context and arg

sayHello.call(person, 'Hello');

// 45 Apply - use the 'apply' method to invoke the func w specific context and an array of args
sayHello.apply(person, ['Hi']);

// 46 Bind - Creates a new func w a specific context but not invoking it
const greetPerson = sayHello.bind(person4);
greetPerson('Greetings');














