// mergeSort function sorts the array variable passed to it and will return nothing
// Meaning that the sorting is done directly on the original array without returning a new array
function mergeSort(arr, l, h) {
  if (Array.isArray(arr)) {
    if (l < h) {
      let mid = Math.floor((l + h) / 2);
      mergeSort(arr, l, mid);
      mergeSort(arr, mid + 1, h);
      merge(arr, l, mid, h);
    }
  }
}

function merge(arr, l, mid, h) {
  const arrCopy = [];
  let i = l;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= h) {
    if (arr[i] <= arr[j]) {
      arrCopy[k] = arr[i];
      i++;
      k++;
    } else if (arr[j] <= arr[i]) {
      arrCopy[k] = arr[j];
      j++;
      k++;
    }
  }
  while (i <= mid) {
    arrCopy[k] = arr[i];
    k++;
    i++;
  }
  while (j <= h) {
    arrCopy[k] = arr[j];
    k++;
    j++;
  }
  for (i = l; i <= h; i++) {
    arr[i] = arrCopy[i - l];
  }
}

const arr = [2, 4, 1, 24, 51, 9, 1, 2];
console.log(arr); // Output: [2, 4, 1, 24, 51, 9, 1, 2]
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 1, 2, 2, 4, 9, 24, 51]

// mergeSortRec function sorts a copy of the array passed to it and will return that copy
// Meaning that the function will return a new sorted copy of the array without modifying the array passed to it
function mergeSortRec(arr) {
  if (arr.length === 0) {
    return "Please provide a non empty array!";
  } else if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return mergeRec(mergeSortRec(left), mergeSortRec(right));
}

function mergeRec(leftArr, rightArr) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < leftArr.length && indexRight < rightArr.length) {
    if (leftArr[indexLeft] <= rightArr[indexRight]) {
      result.push(leftArr[indexLeft]);
      indexLeft++;
    } else if (rightArr[indexRight] <= leftArr[indexLeft]) {
      result.push(rightArr[indexRight]);
      indexRight++;
    }
  }
  while (indexLeft < leftArr.length) {
    result.push(leftArr[indexLeft]);
    indexLeft++;
  }

  while (indexRight < rightArr.length) {
    result.push(rightArr[indexRight]);
    indexRight++;
  }
  return result;
}

const arr2 = [312, 41, 1, 3, 1, 45, 1, 1];
console.log(arr2); // Output: [312, 41, 1, 3, 1, 45, 1, 1]
console.log(mergeSortRec(arr2)); // Output: [1, 1, 1, 1, 3, 41, 45, 312]
console.log(arr2); // Output: [312, 41, 1, 3, 1, 45, 1, 1]
