// 2 Objects 

// Kunlecoder Video 13+ videos 2 hours: https://www.youtube.com/playlist?list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz  
// Google Notes https://docs.google.com/document/d/1ZW6a8qf8APQJyHFLn-_hb2ZrJD-2GlqY3bkz8Vl-SCw/edit?usp=sharing

// Convert string into an object using '[]' with chars as keys and # of occurances as values
// obj {'a':2}

let str = 'Convert me to an object please.';

let obj = {};

for (let char of str) {
  !obj[char] ?  // check if the obj has this char?
    obj[char] = 1  // if not, assign it to 1
    :
    obj[char]++;  // if yes, just increment it
}

console.log(JSON.stringify(obj));

console.log(obj);