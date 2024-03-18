// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const student = [
    {
        name: "Shubham",
        age: 28,
    }
    ,
    {
        name: "Yashi",
        age: 22,
    },
    {
        name: "John",
        age: 30,
    }
]
student.sort((a,b)=>a.age - b.age);
student.forEach(stud =>{
    console.log(stud)
});