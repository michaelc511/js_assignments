// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK

/// Chap 10 Objects 58 //////////////////////////////////////////////

// 58 Object example
let person = {
  name: "Happy",
  hobbies: ["Teacing", "running", "coding"],
  greet: function () {
    console.log("Name: ", this.name);
  },
};

console.log("58 Person name:", person.name);
console.log("59", person.hobbies[1]);
person.greet();

// 59 Object Literal

var guy = {
  name: "Happy",
  age: 39,
  role: "trainer",
};

console.log("59 Object Literal:", guy);

// 60 Object constructor

let guy2 = new Object();
guy2.name = 'Tony';
guy2.age = 30;
guy2.role = 'CEO'

console.log('60 Obj constructor:', guy2)

// 61 Object.create() method

let human = {
  name: '',
  age: 0,
  role: ''
}

let man = Object.create(person);
man.name = 'Peter';
man.age = '20';
man.role = 'student';

console.log('61 Object.create()', man)

// 62 diff Array and object

// 62.1 Arrays - collection of values, denoted by '[]', elements are ordered
var fruits = ['orange', 'banana', 'orange']

// 62.2 Objects - collection of key-value pairs, denoted by '{}', properties are unordered

let cat = {
  name:'Perry',
  age: 10,
  city:'SF'
}

// 63 Add, modify or delete properties of objects?

// blank obj
let car = {};

// adding properies
car.name = 'Honda Accord';
car.year = 2023;
car.country = 'Japan';
console.log('63 add properties:', car)

// modifying properties
car.year = 2024;
console.log('63 modify :', car)

// deleteing properties
delete car.country;
console.log('63 after deletion:', car)