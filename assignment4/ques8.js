// Write a program to remove duplicate elements from an array
function removeDuplicate(arr) {
    let set = [...new Set(arr)];
    console.log(set);

}
let array1 = [1, 2, 3, 4, 5, 1, 3, 5];
removeDuplicate(inputArray);

//Logic 2

let array2 = [1, 2, 3, 4, 5, 1, 3, 5];
function removeDuplicate(arr) {
    console.log(arr.filter(function (val, index) {
        return arr.indexOf(val) === index;
    }))


}

removeDuplicate(inputArray);