// 6.
//  var person = { name: "John Doe", age: 30, getDetails: function()
//   { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

//Solution
//We cannot assign object method like this because "this" scope is not in the
// getPersonalDetails.
//Corrected code
var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};

var getPersonDetails = person.getDetails.bind(person);
getPersonDetails();
