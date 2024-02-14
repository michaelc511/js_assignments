
// 1 JSON Array of Objects 

const jsonData = {
  people: [
    {
      name: "John",
      age: 30,
      city: "New York"
    },
    {
      name: "Alice",
      age: 25,
      city: "Los Angeles"
    },
    {
      name: "Bob",
      age: 35,
      city: "Chicago"
    }
  ]
};

jsonData.people.map((person) => {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  console.log("-------------------------");
});

// 2 JSON w 2 arrays of objects 

const jsonData2 = {
  name: "Example JSON",
  address: "123 Main Street",
  people: [
    {
      name: "John",
      age: 30,
      city: "New York"
    },
    {
      name: "Alice",
      age: 25,
      city: "Los Angeles"
    },
    {
      name: "Bob",
      age: 35,
      city: "Chicago"
    }
  ],
  cars: [
    {
      make: "Toyota",
      model: "Camry",
      year: 2018
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2020
    }
  ]
};

// Parsing 'name' and 'address'
console.log("Name:", jsonData2.name);
console.log("Address:", jsonData2.address);
console.log("-------------------------");

// Parsing 'people' array
console.log("People:");
jsonData2.people.map((person) => {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  console.log("-------------------------");
});

// Parsing 'cars' array
console.log("Cars:");
jsonData2.cars.map((car) => {
  console.log("Make:", car.make);
  console.log("Model:", car.model);
  console.log("Year:", car.year);
  console.log("-------------------------");
});
