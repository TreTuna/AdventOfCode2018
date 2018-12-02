const { part2TestIds, boxIds } = require("./day2input");
const R = require("ramda");

function boxIdsDifferBy1(boxIds) {
  let idArray = boxIds.map(id => {
    return id.split("");
  });
  for (var i = 0; i < boxIds.length - 1; i++) {
    for (let j = i + 1; j < boxIds.length; j++) {
      let commonLetters = [];
      let offBy = 0;
      idArray[i].forEach((letter, li) => {
        if (letter !== idArray[j][li]) {
          offBy++;
        } else {
          commonLetters.push(idArray[i][li]);
        }
      });

      if (offBy < 2) {
        return commonLetters.join("");
      }
    }
  }
}

boxIdsDifferBy1(part2TestIds); /*? */
boxIdsDifferBy1(boxIds); /*? */
