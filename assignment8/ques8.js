// 8.
// function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.getDetails = function() {
//    console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();

//Solution
//Error -We have deleted person.name and now we are trying to access it.
//Corrected code
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
var person = new Person("John Doe", 30);
person.getDetails();
