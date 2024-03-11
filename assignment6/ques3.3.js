// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
// Override the farewell() method to include information about what the teacher teaches.
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

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    farewell() {
        console.log(`${super.farewell()} I teach ${this.subject}.`);
    }
}
const teacher1 = new Teacher("Harry", 28, "Computer Science");
teacher1.farewell();
