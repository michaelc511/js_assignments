// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK

/// Chap 7 Strings 47-50 //////////////////////////////////////////////

// 47 Template literals

let name = "Tony";
console.log(`47 Hello ${name}`);

// 48 backticks for multi-lines too

console.log(`48 backtick
multi
line
string
`);

// 49 String operations https://www.w3schools.com/jsref/jsref_obj_string.asp

let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;

// add +
console.log("49 str + " + str1 + str2);

// concat()
console.log("49 concat " + str1.concat(str2));

// extract()
console.log("49 extract " + result.substring(6, 11));

// length
console.log("49 length " + result.length);

// convert lower to uppercase
console.log(
  "49 toUpperCase and toLowerCase " +
    result.toUpperCase() +
    " " +
    result.toLowerCase()
);

// split() into arrays using delimiter
console.log('49 split(" ") ' + result.split(" "));

// replace() occuracnes of substring w a string

console.log("49 replace + " + result.replace("world", "Javascript"));

// remove leading and trailing spaces

let result2 = "  Hello World  ";
console.log("49 trim: " + result2.trim());

// substr()

console.log("49 : " + result.substr(6, 11));

// includes()
// indexOf()
// slice()
// lastInextOf()
// charAt()
// valueOf()
// toString()
console.log("49 toString() : " + result.toString());

// match()
// console.log('49 : ' + );
// console.log('49 : ' + );
// console.log('49 : ' + );
// console.log('49 : ' + );
// console.log('49 : ' + );
// console.log('49 : ' + );
// console.log('49 : ' + );

// 50 Join strings 4 ways

// 1 +

console.log("50 str + " + str1 + str2);
// 2 concat()

console.log("50 concat " + str1.concat(str2));

// 3 Template Literals

console.log(`49 template literals ${str1.concat(str2)}`);

// 4 join() - for array of strings

let strs = ["Hello", "World"];

console.log("50 join " + strs.join(" "));

// 51 String immutablity

//
let str = "Interview";

str = str + " Happy";

console.log("51 Strings are immutable.");

