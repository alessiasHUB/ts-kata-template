function lastDigit(as) {
  if (as.length === 0) return 1;
  if (as.length === 2 && as[0] === 0 && as[1] === 0) return 1;

  const orderObj = {
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
  };
  const revAs = as.reverse();
  let sum = revAs[0];
  for (let i = 1; i < as.length; i++) {
    if (i + 1 < as.length) {
      sum = Math.pow(revAs[i], sum) / orderObj[revAs[i + 1]].length; // 16
    }
  }
  let first;
  orderObj[as[0].toString()];
  return sum % 10;
}
// 4^2 = 16 (16 / 3.length(=4) = 4 (16/4)) 3^4 = 3[4-1] = 1
console.log(lastDigit([3, 4, 2]), "expects: 1");
// 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721

// 6^21 = 6 (x / 7.length(=4) = y (x/y)) = 7^(x/y) = 7[(x/y)-1]
console.log(lastDigit([7, 6, 21]), "expects: 3");
// 3 ^ (4 ^ ( 2 ^ 5 ))
