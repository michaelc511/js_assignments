// Functions in JS

// 10 params vs args 

function square(num) { // params
  console.log(num * num);
}

square(5); // arguments 

// 10a spread vs rest

// function multiply(num1, num2){ // params
function multiply(...nums) { // params as 'rest' 
  console.log('Spread: ', nums[0] * nums[1]);
}

var arr = [5, 6];

multiply(...arr); // arguments passed using 'spread'

// 11 Params vs args Output 

// const fn = (a, ...numbers, x, y) => {
//   console.log(x,y); // gets an error that 'Rest parameter must be last'
// }

// fn(5,6,3,7);

const fn2 = (a, x, y, ...numbers) => {
  console.log(a, x, y, numbers[0]); // gets an error that 'Rest parameter must be last'
}

fn2(5,6,3,7);

// 12 