// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// 3rd # is sum of 1 and 2

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

var fib = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

	console.log(arr);
  return arr[n]
};

console.log(fib(5));

// recursion example

var fib2= function (n) {
  if(n <= 1) return n;
 
  return fib2(n-1) + fib2(n-2);
};

// n = 3 => 1 + 1 => 2
// fib(2) => 0 + 1 => 1

console.log('Resursion:', fib2(5));