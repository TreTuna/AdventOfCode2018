const { part1TestIds, boxIds } = require("./day2input");
const R = require("ramda");

function checksum(boxIds) {
  let countOf2s = 0;
  let countOf3s = 0;

  boxIds.forEach(id => {
    const letters = {};
    let hasTwo = false;
    let hasThree = false;
    for (let letter of id) {
      if (letters.hasOwnProperty(letter)) {
        letters[letter] = letters[letter] + 1;
      } else {
        letters[letter] = 1;
      }
    }

    R.forEachObjIndexed((value, key) => {
      if (value === 2) {
        hasTwo = true;
      }
      if (value === 3) {
        hasThree = true;
      }
    }, letters);

    if (hasTwo) {
      countOf2s++;
    }
    if (hasThree) {
      countOf3s++;
    }
  });

  return countOf2s * countOf3s; /*? */
}

checksum(part1TestIds);
checksum(boxIds);
