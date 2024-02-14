// 1 Parsing JSON, we have a string and use JSON.parse to convert it to JSON

const jsonString = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // John

// 2 Stringfy JS Objects
// We have a JSON object and convert it to a string using JSON.stringify(obj)

const jsonObj2 = { name: "John", age: 30, cars: ["Ford", "BMW", "Fiat"] };
const jsonString2 = JSON.stringify(jsonObj2);
console.log(jsonString2); // '{"name":"John","age":30,"cars":["Ford","BMW","Fiat"]}'

// 3 Nested Object
const person = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
};

console.log(person.cars.car2); // BMW

// 4 Looping through JSON
const person2 = {
  name: "John",
  age: 30,
  cars: ["Ford", "BMW", "Fiat"]
};

//  Looping through an array in a JSON object
for (let i = 0; i < person2.cars.length; i++) {
  console.log("4", person2.cars[i]);
}

// 5 Using forEach for arrays
person2.cars.forEach((car) => {
  console.log('5', car);
});

// 6 Using for...in to loop through an object's properties
for (let key in person2) {
  console.log('6', key, person2[key]);
}

// Using for...of to iterate over iterable objects like Arrays, Strings, Maps, NodeLists, and more
for (let car of person2.cars) {
  console.log('7', car);
}
