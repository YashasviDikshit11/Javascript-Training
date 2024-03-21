// 3.1 Create a class Person with properties name, age, gender, and interests. 
// Add a method greeting() that returns a string introducing the person.
//  Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
    name;
    age;
    gender;
    interests;
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    greeting(name) {
        console.log("Hello" + " " + this.name);

    }
    farewell(name) {
        console.log("Goodbye" + " " + this.name);
    }

}
const person1 = new Person("Yashi");
person1.greeting();
person1.farewell();
const person2 = new Person("Shubham");
person2.greeting();
person2.farewell();

