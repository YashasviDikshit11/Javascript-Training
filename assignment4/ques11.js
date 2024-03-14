let inputArray = [7, 4, 2, 1, 9];

function bubbleSort(arr) {
  let swapped;
  for (let i = arr.length - 1; i > 0; i--) {
    flag = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }

    if (flag == false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(inputArray));
