// Write a program to find index of duplicate elements in an array

function findDuplicateIndex(arr) {
    let set = new Set();
    for (let i of arr) {
        if (set.has(i) == false) {
            set.add(i);
        }
        else {
            console.log(arr.indexOf(i));
        }
    }
}
let inputArray = [1, 2, 3, 4, 5, 1, 3, 5];
findDuplicateIndex(inputArray);