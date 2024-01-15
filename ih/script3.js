// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK
// Google Notes: https://docs.google.com/document/d/e/2PACX-1vScDUMqQCttLaaJBnHu1TsnlLhYyBTmJt8k7C-x9jJWzj63E7lXe_DWIXXaFPV6dhT470Nx2HG-Bj1l/pub 


/// Chap 5 Loops 24-30 //////////////////////////////////////////////

// 24 for loop

for(let i = 0; i<5; i++){
  console.log('24 for:', i);
}

// while loop

let j = 0;

while(j < 5){
  console.log('while:', j);
  j++;
}

// while condition only

while ("a" === 15){
  console.log("Don't run this");
}

// 25 do while

let k = 0;

do {
  console.log('25 do while will run at least 1x:', k);
  k++;
} while (k>1);

// 26

for(let i= 1; i<=5; i++){
  if(i===2){
    console.log('26 cont');
    continue;
  }

  if(i===5){
    console.log('26 break');
    break;
  }
  console.log('26 index',i);
}

// 27 for vs for of for iteration of arrays

let arr=[1,2,3];

//for
for(let i =  0; i<arr.length; i++){
  console.log('27 for', arr[i]);
}

// for of 
for(let elem of arr){
  console.log('27 for of',elem);
}

// 28 for in - great for iteration of keys of an object

const person = {
  name: 'Tony',
  role: 'Engineer'
};

for(let key in person){
  console.log('28', person[key]);
}

// 29 forEach method vs for...of vs for...in

// forEach - iterate over each elem and do an operation

const arr2 = [3,4,5];

arr2.forEach((elem)=>{
  console.log('29 forEach()', elem)
});

// forEach for objects

Object.values(person).forEach((value)=>{
  console.log('29 forEach() object', value)
})

// for..of

for(let elem of arr2){
  console.log('29 for...of', elem)
}

// for...in

for(let index in arr2){
  console.log('29 for...in', arr2[index]);
}

// 30 for...of vs forEach when to use

// for...of more control over loop to break or continue
const arr3 = [6,7,8];

for(let elem of arr3){
  console.log('30 for...of', elem);
  if(elem===7){
    break;
  }
}

// forEach() iterate through each elem and perform some action, cannot break or continue

arr3.forEach((elem)=>{
  console.log('30 forOf()', elem);
  if(elem === 7){
    // continue; // not work
    //break; // will not work
  }
})