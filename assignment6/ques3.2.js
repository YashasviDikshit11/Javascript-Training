// 3.2 Create a class Student that inherits from the Person class and has a property studies.
//  Override the greeting() method to include information about what the student is studying.
class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        return `Hello, my name is ${this.name}.`;
    }

    farewell() {
        return `Goodbye, ${this.name}.`;
    }
}

class Student extends Person {
    constructor(name, age, studies) {
        super(name, age);
        this.studies = studies;
    }

    greeting() {
        return `${super.greeting()} I am studying ${this.studies}.`;
    }
}

const student1 = new Student("Yashi", 20, "Computer Science");
console.log(student1.greeting());
