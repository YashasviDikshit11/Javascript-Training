// Write a program to find sum of an array
function sum(arr) {
    let ans = 0;
    for (let x of arr) {
        ans += x;

    }
    return ans;
}
let array = [2, 3, 4];
console.log(sum(array));