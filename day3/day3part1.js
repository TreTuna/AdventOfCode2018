const { testInputs, claimAreas } = require("./day3input");
const { performance } = require("perf_hooks");

// testInputs: [[[1, 3], [4, 4]], [[3, 1], [4, 4]], [[5, 5], [2, 2]]],

function findDoubleClaimedAreas(claimAreas) {
  let single = [];
  let multiple = [];
  let start = performance.now();
  console.log("🔥🔥🔥🔥🔥🔥 start 🔥🔥🔥🔥🔥🔥", start);

  claimAreas.forEach((area, i) => {
    console.log("🔥🔥🔥🔥🔥🔥 i, area 🔥🔥🔥🔥🔥🔥", i, area);
    console.log("🔥🔥🔥🔥🔥🔥 single.length 🔥🔥🔥🔥🔥🔥", single.length);
    console.log("🔥🔥🔥🔥🔥🔥 multiple.length 🔥🔥🔥🔥🔥🔥", multiple.length);

    const [xStart, yStart] = area[0];
    const [xEnd, yEnd] = area[1];

    for (var x = xStart; x < xStart + xEnd; x++) {
      for (var y = yStart; y < yStart + yEnd; y++) {
        let cell = `}${x}, ${y}{`;
        let singleIndexOf = single.indexOf(cell);
        if (singleIndexOf === -1) {
          single.push(cell);
        } else {
          let multipleIndexOf = multiple.indexOf(cell);
          if (multipleIndexOf === -1) {
            multiple.push(cell);
          }
        }
      }
    }
  });
  const end = performance.now();
  console.log("🔥🔥🔥🔥🔥🔥 Elapsed time 🔥🔥🔥🔥🔥🔥", end - start);
  return multiple.length;
}

// findDoubleClaimedAreas(testInputs);
findDoubleClaimedAreas(claimAreas);
