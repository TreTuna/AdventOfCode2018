const { testInputs, guardLog } = require("./day4input");

function sortByDate(a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.date) - new Date(b.date);
}

function getMinute(entry) {
  if (entry.date.slice(-5, -3) === "00") {
    return parseInt(entry.date.slice(-2));
  } else {
    return parseInt("00");
  }
}

function bestGuardMinute(guardLog) {
  guardLog.sort(sortByDate);
  const guards = {};
  let onShiftGuard;
  let asleepAt;
  let wakesUpAt;
  let bestGuard = { guardId: 0, time: 0, amount: 0, totalSleepingTime: 0 };

  guardLog.forEach((entry, i) => {
    if (entry.action === "falls asleep") {
      asleepAt = getMinute(entry);
    } else if (entry.action === "wakes up") {
      wakesUpAt = getMinute(entry);
      for (
        let currentMinute = asleepAt;
        currentMinute < wakesUpAt;
        currentMinute++
      ) {
        let currentGuard = guards[onShiftGuard];
        currentGuard.timeLog[currentMinute]++;
        currentGuard.totalSleepingTime++;
        if (
          currentGuard.timeLog[currentMinute] > currentGuard.bestChance.amount
        ) {
          currentGuard.bestChance.time = currentMinute;
          currentGuard.bestChance.amount = currentGuard.timeLog[currentMinute];
          if (currentGuard.totalSleepingTime > bestGuard.totalSleepingTime) {
            bestGuard = {
              guardId: onShiftGuard,
              bestMinute: currentGuard.bestChance.time,
              totalSleepingTime: currentGuard.totalSleepingTime
            };
          }
        }
      }
    } else {
      onShiftGuard = /#(.*?) /.exec(entry.action)[1];
      if (!guards[onShiftGuard]) {
        guards[onShiftGuard] = {
          totalSleepingTime: 0,
          bestChance: { time: 0, amount: 0 },
          timeLog: new Array(60).fill(0)
        };
      }
    }
  });

  return bestGuard.guardId * bestGuard.bestMinute;
}

console.log(bestGuardMinute(testInputs));
console.log(bestGuardMinute(guardLog)); /*?.*/
