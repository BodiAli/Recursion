function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else if (n < 0) {
    return "Please a number bigger than 0";
  } else {
    let fibSeq = fibsRec(n - 1);
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    return fibSeq;
  }
}

console.log(fibsRec(5)); // Output: [0, 1, 1, 2, 3]

// fibsRec(5)
//   return [0, 1, 1, 2, 3]
//     fibsRec(4)
//       return [0, 1, 1, 2]
//         fibsRec(3)
//           return [0, 1, 1]
//             fibsRec(2)
//               return [0, 1]

console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(-1)); // Output: "Please a number bigger than 0"
