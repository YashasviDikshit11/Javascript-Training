// Write a program to sort an array (bubble sort)

let inputArray = [7, 4, 2, 1, 9];

function bubbleSort(arr) {
  let flag;
  for (let i = arr.length - 1; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        flag = true;
      }
    }

    if (flag==false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(inputArray));

