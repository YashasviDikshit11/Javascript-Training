// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
const student = {
    name: 'Yashi',
    age: 22,
    hobbies: ['singing', 'travelling', 'coding'],

};
const studentDeepCopy=JSON.parse(JSON.stringify(student));
studentDeepCopy.hobbies= ['dancing', 'travelling', 'coding'];
console.log(student.hobbies);