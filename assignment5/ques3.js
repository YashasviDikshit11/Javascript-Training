// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
const student = [
    {
        name: "Shubham",
        age: 28,
        id:1,
    }
    ,
    {
        name: "Yashi",
        age: 22,
        id:2,
    },
    {
        name: "John",
        age: 30,
        id:3,
    }
]
const studentAfterIdRemoval=student.map(({id,...rest})=> rest);
console.log(studentAfterIdRemoval);
