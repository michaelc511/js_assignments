// Palidrome number

// input x - 121 , true
// input x = 10 , false

const isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join(""); // join to convert the array to string

};

console.log(isPalindrome(121));

/*

  // num => toString => split('') => reverse() => join('') and use parseInt or '+' to conver into number
  // 121 => '122' => ['1','2','1'] =>  ['1','2','1'] => "121"

*/

// Optimized
const isPalindrome2 = function (x) {
  return x<0? false: x === +x.toString().split("").reverse().join(""); // join to convert the array to string

};

console.log(isPalindrome2(121));

/*
Optimization 

Added edge case if x<0

*/