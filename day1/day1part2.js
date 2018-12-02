const { testNums } = require("./day1Input.js");

function frequencyPart2(numList) {
  let allTotals = new Set();
  let firstDuplicate;
  let runningTotal = 0;

  while (firstDuplicate === undefined) {
    numList.forEach(num => {
      runningTotal = runningTotal + num;
      if (allTotals.has(runningTotal) && firstDuplicate === undefined) {
        firstDuplicate = runningTotal;
      }
      allTotals.add(runningTotal);
    });
  }
  return `first duplicated: ${firstDuplicate}`; /*? */
}

frequencyPart2(testNums); /*?. */
