// const reverseSeq = (n) => {
//   let data = [];

//   for (let i = n; i >= 1; i--) {
//     let result = i;

//     data.push(result);
//   }
//   return data;
// };

// Cara ke -2

// const reverseSeq = (n) =>
//   Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();

// Cara ke -3

const reverseSeq = (n) =>
  Array(n)
    .fill()
    .map((el, i) => n - i);

console.log(reverseSeq(5));
