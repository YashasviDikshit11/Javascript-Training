// 9.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var person = Person("John Doe", 30);
// console.log(person.name);

//Solution
//Error is new keyword is not used
//Corrected code
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("John Doe", 30);
console.log(person.name);
