// Write a program to iterate over object.
const student = {
    name: 'Yashi',
    age: 22,
    hobbies: ['singing', 'travelling', 'coding'],

};
for (let key in student) {
    console.log(key + "->" + student[key]);
}