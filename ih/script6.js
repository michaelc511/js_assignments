// Functions in JS
// Top 100 JS Questions 3 hours: https://youtu.be/AUTO7ALJk2U?si=5U-W4-Jq034x2BnK

/// Chap 9 Error Handling 52-57 //////////////////////////////////////////////

// 52 Try catch

try {
  const result = 10;
  console.log("52 Try block", result);
} catch (error) {
  console.log("Error message:", error.message);
}

// 53 Finally

try {
  const result = 10;
  console.log("53 Try", result);
} catch (error) {
  console.log("Error message:", error.message);
} finally {
  console.log("53 finally runs");
}

// 54 throw

try {
  const result = 10;
  if (result < 11) {
    throw new Error("54 Throwing New Error()");
  }
  console.log("54 Try", result);
} catch (error) {
  console.log("54 Error message:", error.message);
} finally {
  console.log("54 finally runs");
}

// 55 Error propagation 

function userData() {
  try {
    validateUserAge(20);
    validateUserAge("invalid");
    validateUserAge(15);
  } catch (error) {
    console.log("55 Error message:", error.message);
  }
}

function validateUserAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number");
  }

  console.log("55 User age at " + age + " is valid");
}

userData();

// 56 Best practices for error handling

// 56.1 Use Try Catch and handle errors appropriately

// 56.2 Use descriptive error messages 

// 56.3 Avoid shallow errors (empty catch)

// 56.4 Log errors 

// 57 Types of errors

// // 57.1 Syntax Error
// console.log("57.1 Syntax", result;

// // 57.2 Reference Error

// console.log(myVariable);

// // 57.3 Type Error

// const number = 42;
// console.log(number.toUpperCase());

// 57.4 Range Error
// const arr = [1,2,3];
// console.log(arr[12]);