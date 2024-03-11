// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
// The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of 
// `Person` objects and returns the average age of all the people in the array.
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(firstName, lastName) {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
    static averageAge(arr) {
        let sum = 0;
        for (let person of arr) {
            sum += person.age;
        }
        return sum / arr.length;
    }
}
const person1 = new Person("Yashi", "Dixit", 30);
const person2 = new Person("samarth", "srivastava ", 20);
const person3 = new Person("Shubham", "Dixit", 40);
console.log(person1.fullName("Yashi", "Dikshit"));
let arr = [person1, person2, person3];
console.log(Person.averageAge(arr));



