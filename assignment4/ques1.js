// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
function removeDuplicate(inputString) {
  let str = inputString.split("");
  let unique_string = str.filter((item, index) => str.indexOf(item) == index);
  return unique_string.join("");
}
console.log(removeDuplicate("Hello Yellow"));

// Logic 2

function removeDuplicate(inputString) {
  const set = new Set();
  let result = "";
  for (let ch of inputString) {
    set.add(ch);
  }
  for (ch of set) {
    result += ch;
  }
  return result;
}
console.log(removeDuplicate("Hello Yellow"));
