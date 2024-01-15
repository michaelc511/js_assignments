// Functions in JS
//  Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK
// Google Notes: https://docs.google.com/document/d/e/2PACX-1vScDUMqQCttLaaJBnHu1TsnlLhYyBTmJt8k7C-x9jJWzj63E7lXe_DWIXXaFPV6dhT470Nx2HG-Bj1l/pub 

/// Chap 2 Conditions/Arrays 11-23  //////////////////////////////////////////////

// 11 Types of conditions

//if 

let x = 5;

if (x >10) {
  console.log('1');
} else if (x < 5) {
  console.log('2');
} else {
  console.log('3')
}

// ternary

let y =20;

let z = y > 10? '1': '2';
console.log(z);

// swtich

switch(x) {
  case 1:
    console.log('1');
    break;
  case 5:
    console.log('2');
    break;
  default:
    console.log('3');
}

// 12 diff == and ===

console.log(1=='1');
console.log(true == 1);

console.log(1==='1');
console.log(true === 1);

// 13 spread  

const arr = [1,2,3];

console.log(...arr);

// copy
const copiedArr = [...arr];
console.log(copiedArr);

// merging
const arr2=[4,5,6];

const merged = [...arr, ...arr2];

console.log(merged);

// passing multiple args to a function

function sum(a,b,c){
  console.log(a,b,c);
}

sum(arr);

// 14 Rest

function display(a,b, ...restArg){
  console.log(a, b, restArg[0], restArg[1], restArg[2]);
}

display(1,2,9,10,11);

/// Ch 4 Arrays /////////////////////////////////////////////
// 15 Array get 

const fruit = ['bannana', 'orange', 'mango', 'orange'];

// indexOf()
console.log('indexOf()', fruit.indexOf('orange'));
// find() - return first item 
console.log('find()', fruit.find( (elem )=> { return elem === 'orange';}));
// filter() - returns arr w matching
console.log('filter()', fruit.filter( (elem )=> { return elem === 'orange';}));
// slice(inx,end)
console.log('Slice', fruit.slice( 1,3 ));

// 16 Array add

// push() - adds to end, returns new length
console.log('push', fruit.push('tomato'));

// concat() - adds 2 arrays into one new one
const fruit2=['strawberry', 'grapes'];
const concatedFruits = fruit.concat(fruit2);
console.log('concat', concatedFruits);

// unshift() - adds to the start of arr and returns new length

console.log('unshift', fruit.unshift('nothiong') , fruit);


// 17 Remove 
// pop - removes last element and returns length
console.log('pop', fruit.pop( ) , fruit);

// shift() - removes 1st element and returns 1st element removed
console.log('shift', fruit.shift());

// splice() - removes start and tot and returns removed 
const fruit3 = ['bannana', 'orange', 'mango', 'orange'];

console.log('splice',fruit3.splice(0,3));

// 18 modify

// map()
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log('map() took old arr and modifed it', numbers, newArr);
// forEach()

let sum2 = 0;
const numbers2 = [65, 44, 12, 4];

numbers2.forEach(myFunction2);

function myFunction2(item) {
  sum2 += item;
}

console.log('forEach() iterate arr', numbers2, sum2);

// 19 more array methods
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];

// join() - returns an arr as string
console.log('join()', fruits9.join());

// length()
console.log('length()', fruits9.length);

// sort()
console.log('sort()', fruits9.sort());

// reverse()

console.log('reverse()', fruits9.reverse());

// reduce () - subtract all nums in array 
const numbers9 = [15.5, 2.3, 1.1, 4.7];
let reduce9 = numbers9.reduce(getSum, 0);
function getSum(total, num){
  return total + Math.round(num);
}
console.log('reduce', numbers9);

// some() - check if any values are over 18 
const ages = [3, 10, 18, 20];

console.log('some()', ages.some(checkAdult));
function checkAdult(age) {
  return age > 18;
}

// every() - checks if all values in [] are over 18
const ages9 = [32, 33, 16, 40];

console.log('every', ages9.every(checkAge));

function checkAge(age) {
  return age > 18;
}

// 20 diff map() vs forEach()

// map()
let arr1=[1,2,3];
let mapArr = arr1.map((e)=> e *2);
console.log('map() mod all elem and return a new arr', mapArr);

// forEach()


let arr20=[1,2,3];
let mapArr2 = arr20.forEach((e)=> { 
  console.log(e *2)
});
console.log('forEach() perform operations on each elem and Not return a new arr', mapArr);



// Ch 4 Arrays 

// 21 Array Destructuring 

const fruits = ['apple', 'bannana', 'orange'];

const [first, second, third] = fruits;

console.log('21 arr destructure:', first); 
console.log(second); 
console.log(third); 

// 22 array-like objects 

// arguments 

sum(1,2,3);

function sum(){
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
}

// Strings
const str = 'Hello';
console.log('22. Str operations: ', str);
console.log(str.length);
console.log(str[0]);

// HTML Collections 
// using document.getElementsByClassName('box')...

// 23 Convert array-like obj to arr
// Array.from()

var arrLike = {0:'a', 1:'b', 2:'3', length: 3};

console.log('23. Array.from()', Array.from(arrLike));

// spread
// var arr2 = [...arrLike];
// console.log('Spread', arr2)

// Array.prototype.slice.call();
var arr3 = Array.prototype.slice.call(arrLike);
console.log('Arr conversion:', arr3);