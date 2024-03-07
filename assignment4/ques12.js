//Write a program to display intersection of two array

let inputArray1 = [1, 2, 3, 4, 5];
let inputArray2 = [2, 3, 40, 5];

inputArray1.sort((a, b) => a - b);
inputArray2.sort((a, b) => a - b);


function findIntersection(arr1, arr2) {
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            console.log(arr1[i]);
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
}

console.log(findIntersection(inputArray1, inputArray2));