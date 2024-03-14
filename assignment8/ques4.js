// 4
// let myString = "hello world";
// if (myString.length > 0) {
//   console.log("The length of the string is: " + myString.length);
// } else {
//   console.log("The string is empty");
// }

// let myNumber = parseInt(myString);
// if (myNumber) {
//   console.log("The number is: " + myNumber);
// } else {
//   console.log("The value is not a number");
// }

//Error is parseInt is returning undefined because we are passing "hello world" to it
//  instead of a number
//Corrected Code
let myString = "123";
if (myString.length > 0) {
  console.log("The length of the string is: " + myString.length);
} else {
  console.log("The string is empty");
}

let myNumber = parseInt(myString);
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The value is not a number");
}

