//Write a program to return inverse of an array

let inputArray = [2, 3, 5, 10];
let max = Number.MIN_VALUE;

for (let i of inputArray) {
  if (i > max) {
    max = i;
  }
}

let arr = new Array(max);

for (let i = 0; i < inputArray.length; i++) {
  arr[inputArray[i]] = i;
}
console.log(arr);
