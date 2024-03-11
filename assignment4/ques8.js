// Write a program to remove duplicate elements from an array
const removeDuplicate=(arr) =>{
    let set = [...new Set(arr)];
    console.log(set);

}
let array1 = [1, 2, 3, 4, 5, 1, 3, 5];
removeDuplicate(array1);

