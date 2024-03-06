// Write a program to print all even number first and then all odd numbers
function printEvenOdd(num) {
    console.log("Even numbers are :");
    for (let i = 2; i <= num; i += 2) {
        console.log(i);
    }
     console.log("Odd numbers are:");
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
    }
}

printEvenOdd(10); 