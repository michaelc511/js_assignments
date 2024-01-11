// 1 - Common coding practices and apply it to reverse a string challenge

// Kunlecoder Video 13+ videos 2 hours: https://www.youtube.com/playlist?list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz  
// Google Notes https://docs.google.com/document/d/1ZW6a8qf8APQJyHFLn-_hb2ZrJD-2GlqY3bkz8Vl-SCw/edit?usp=sharing

// convert a string to an array
console.log('Hello'.split("")); // Use '' to split by chars

// reverse an array
let arr = ['h', 'e', 'l','l','o'];
console.log(arr.reverse());

// turn an array to a string
console.log(arr.join("")) // Use '' to join arr elements to string

// iteration of a string using 'for...let of'
let str = 'hello';

for(let char of str){
  console.log('char using for of', char);
}

// Array iteration 3 ways

// iteration of an array using 'for...let of'
let arr2 = ['h','e','l','l','0'];

for(let elem of arr2){
  console.log('elem using for of', elem);
}

// using 'for...let in'
for(let idx in arr2){
  console.log('idx using for...let in', idx, arr2[idx]);
}

// using forEach()
arr2.forEach((elem)=>{
  console.log('using arr.forEach', elem);
});
 
// Implementation //////////////////////////////////////////////

// Reverse a string using methods - convert str to arr, use arr to reverse, convert back to string, use IIFE
(function rev(str){ 
  // console.log('Using methods to reverse str', str.split('').reverse().join(''));
})('Hi there');
 

function revStr(str){ 
  console.log('Using methods to reverse str', str.split('').reverse().join(''));
}
revStr('Hi there');

// Reverse a string using for loop, no array and string methods
(function rev(str){
  let reversed = '';
  for(let char of str){ // we just append each char to the new string reversed 
    reversed = char + reversed;
  }
  console.log('Reversed:', reversed);
})('You too');


// Palindrome - words read the same backwords and forward ex. 'abba', 'kayak', 'deed'
function isPalindrome(str){
  let reversed = str.split('').reverse().join('');
  if(reversed === str){
    console.log('Yes', reversed, 'is', str );
  } else {
    console.log('No', reversed, 'is not', str);
  }
}

isPalindrome('abba');

isPalindrome('ribs');
// 
// console.log('', );