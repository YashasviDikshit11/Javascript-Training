// Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

function printTwiceNumbers() {
    let num = 2;
    console.log("Twice of numbers from 2 to 4096:");
    while (num <= 4096) {
        console.log(num);
        num *= 2; 
    }
}
printTwiceNumbers();