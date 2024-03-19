function fibs(n) {
  const arr = [0, 1];
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return arr;
  } else if (n <= 0) {
    return "Please a number bigger than 0";
  }
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
console.log(fibs(2)); // Output: [0, 1]
console.log(fibs(1)); // Output: [0]
console.log(fibs(0)); // Output: "Please a number bigger than 0"
console.log(fibs(-1)); // Output: "Please a number bigger than 0"
