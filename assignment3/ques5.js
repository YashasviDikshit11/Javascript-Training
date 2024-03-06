// Write a program to print all even number first and then all odd numbers using only one iteration

function printEvenOdd(num) {
    let even = '';
    let odd = '';

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            even += i + ' ';
        } else {
            odd += i + ' ';
        }
    }

    console.log(even + odd);
}

printEvenOdd(10);