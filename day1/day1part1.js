const { testNums } = require("./day1Input.js");

function frequencyRun(testNums) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return testNums.reduce(reducer, 0);
}

frequencyRun(testNums); /*? */
