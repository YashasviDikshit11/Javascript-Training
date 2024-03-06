// Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

let n = 5;

for (let i = 1; i <= n; i++) {
    let output = '';
    for (let j = 1; j <= n - i; j++) {
        output += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        output += '*';
    }
    console.log(output);
}

for (let i = n - 1; i >= 1; i--) {
    let output = '';
    for (let j = 1; j <= n - i; j++) {
        output += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        output += '*';
    }
    console.log(output);
}