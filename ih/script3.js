// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK

/// Ch 4 Arrays 

// 21 Array Destructuring 

const fruits = ['apple', 'bannana', 'orange'];

const [first, second, third] = fruits;

console.log(first); 
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
console.log(str);
console.log(str.length);
console.log(str[0]);

// HTML Collections 
// using document.getElementsByClassName('box')...

// 23 Convert array-like obj to arr
// Array.from()

var arrLike = {0:'a', 1:'b', 2:'3', length: 3};

console.log('Array.from()', Array.from(arrLike));

// spread
// var arr2 = [...arrLike];
// console.log('Spread', arr2)

// Array.prototype.slice.call();
var arr3 = Array.prototype.slice.call(arrLike);
console.log(arr3);

/// Chap 5 Loops //////////////////////////////////////////////