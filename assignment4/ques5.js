// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
let inputString = "hello john doe";
inputString = inputString.toLowerCase();
let convertArray = inputString.split(" ");
let result = "";

const firstUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
};
let flag = true;
for (let i of convertArray) {
  if (flag == true) {
    result += i;
    flag = false;
  } else {
    result += firstUpperCase(i);
  }
}

console.log(result);
