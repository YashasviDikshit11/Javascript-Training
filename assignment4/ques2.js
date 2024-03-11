// Write a program to reverse a string ("Hello John" => "olleH nhoJ")
function reverseString(str) {

    return str.split("").reverse().join("");
}


let str = "Hello John";
let arr = str.split(" ");
let result = "";
for (let i of arr) {
    result += reverseString(i);
    result += " ";
}
console.log(result);