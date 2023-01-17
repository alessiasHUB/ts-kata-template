// checking performance
for (let i = 10; i <= 100000000; i *= 10) {
  const inputArray = prepareYourInputArray(i);
  const startTime = performance.now();
  removeWithShift(inputArray);
  const stopTime = performance.now();
  const elapsedTime = stopTime - startTime;
  console.log(i, elapsedTime);
}
// make the inputArray
function prepareYourInputArray(num: number) {
  let preparedArr = [];
  for (let i = 0; i < num; i++) {
    preparedArr.push(i);
  }
  return preparedArr;
}

function appendWithUnshift(inputArray: number[]) {
  return inputArray.unshift(1);
}
function appendWithPush(inputArray: number[]) {
  return inputArray.push(1);
}
function removeWithPop(inputArray: number[]) {
  return inputArray.pop();
}

function removeWithShift(inputArray: number[]) {
  return inputArray.shift();
}
