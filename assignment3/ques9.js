// Write a program to print fibonaaci series
function fibo(num) {
    let a = 0;
    let b = 1;
    let sum;
    for (let i = 2; i < num; i++) {
        sum = a + b;
        a = b;
        b = sum;

    }
    return b;
}
console.log(fibo(5));