const { testInputs, claimAreas } = require("./day3input");
const { performance } = require("perf_hooks");

// testInputs: [[[1, 3], [4, 4]], [[3, 1], [4, 4]], [[5, 5], [2, 2]]],

function findUnclaimedAreas(claimAreas) {
  let coords = {};
  let start = performance.now();
  let doubledAreasCount = 0;
  let possibleUnclaimedAreas = [];

  claimAreas.forEach((area, i) => {
    const [xStart, yStart] = area[0];
    const [xLength, yLength] = area[1];
    let areaClaimed = true;
    let winnerWinnerChickenDinner;

    for (var x = xStart; x < xStart + xLength; x++) {
      for (var y = yStart; y < yStart + yLength; y++) {
        if (!coords[`x${x}y${y}`]) {
          coords[`x${x}y${y}`] = 1;
        } else if (coords[`x${x}y${y}`] > 1) {
        } else {
          coords[`x${x}y${y}`]++;
          doubledAreasCount++;
          areaClaimed = false;
        }
      }
    }
    if (areaClaimed) {
      possibleUnclaimedAreas.push(i);
    }
  });

  possibleUnclaimedAreas.forEach(areaIndex => {
    const [xStart, yStart] = claimAreas[areaIndex][0];
    const [xLength, yLength] = claimAreas[areaIndex][1];
    let areaClaimed = true;

    for (var x = xStart; x < xStart + xLength; x++) {
      for (var y = yStart; y < yStart + yLength; y++) {
        if (coords[`x${x}y${y}`] > 1) {
          areaClaimed = false;
        }
      }
    }
    if (areaClaimed) {
      console.log("🔥🔥🔥🔥🔥🔥 WINNER!!!!!!!!!! 🔥🔥🔥🔥🔥🔥", areaIndex);
      winnerWinnerChickenDinner = areaIndex + 1;
    }
  });

  const end = performance.now();
  console.log("🔥🔥🔥🔥🔥🔥 Elapsed time 🔥🔥🔥🔥🔥🔥", end - start);
  return winnerWinnerChickenDinner;
}

// findUnclaimedAreas(testInputs);
console.log(findUnclaimedAreas(claimAreas));
