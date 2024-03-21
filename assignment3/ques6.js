// Write a program to display prime numbers from 1 to 50

function checkPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function printPrime(start, end) {
    console.log("Prime numbers are :")
    for (let i = start; i <= end; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}
printPrime(1, 50);
