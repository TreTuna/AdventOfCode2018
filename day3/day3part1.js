const { testInputs, claimAreas } = require("./day3input");
const { performance } = require("perf_hooks");

// testInputs: [[[1, 3], [4, 4]], [[3, 1], [4, 4]], [[5, 5], [2, 2]]],

function findDoubleClaimedAreas(claimAreas) {
  let coords = {};
  let start = performance.now();
  let doubledAreasCount = 0;

  claimAreas.forEach((area, i) => {
    const [xStart, yStart] = area[0];
    const [xLength, yLength] = area[1];

    for (var x = xStart; x < xStart + xLength; x++) {
      for (var y = yStart; y < yStart + yLength; y++) {
        let cell = `x${x}y${y}`;
        if (!coords[`x${x}y${y}`]) {
          coords[`x${x}y${y}`] = 1;
        } else if (coords[`x${x}y${y}`] > 1) {
        } else {
          coords[`x${x}y${y}`]++;
          doubledAreasCount++;
        }
      }
    }
  });
  const end = performance.now();
  console.log("🔥🔥🔥🔥🔥🔥 Elapsed time 🔥🔥🔥🔥🔥🔥", end - start);
  return doubledAreasCount;
}

// findDoubleClaimedAreas(testInputs);
console.log(findDoubleClaimedAreas(claimAreas));
