// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
let inputString = "abcabcdabbcc";

let countMap = new Map();

for (let i = 0; i < inputString.length; i++) {
  if (countMap.has(inputString[i])) {
    countMap.set(inputString[i], countMap.get(inputString[i]) + 1);
  } else {
    countMap.set(inputString[i], 1);
  }
}

let result = "";
countMap.forEach(function (val, key) {
  result += key + val;
});
console.log(result);
