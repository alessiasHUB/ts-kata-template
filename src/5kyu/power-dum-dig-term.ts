/**
 * title: Numbers that are a power of their sum of digits
 * date: 09/12/2022
 * link: https://www.codewars.com/kata/55f4e56315a375c1ed000159/train/javascript
 * ============================================================
 * task:
 * The number 81 has a special property, a certain power of
 * the sum of its digits is equal to 81 (nine squared). Eighty
 * one (81), is the first number in having this property (not
 * considering numbers of one digit). The next one, is 512.
 * Let's see both cases with the details.
 * 8 + 1 = 9 and 92 = 81
 * 512 = 5 + 1 + 2 = 8 and 83 = 512
 * We need to make a function that receives a number as
 * argument n and returns the n-th term of this sequence of
 * numbers.
 * ============================================================
 * Adds together two numbers
 * @param n - the first number to add
 * @returns the total
 */
function powerSumDigTerm(n: number): number {
  // example: n=1
  // output: 81
  // logic: 8+1 = 9 => 9^2 = 81
  // n + ? = ?? => ??^a = n?
  // ? + n = ?? => ??^a = ?n
  return 0;
}

export default powerSumDigTerm;
