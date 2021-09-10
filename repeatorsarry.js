function findReapeators(arry) {
  /*Hint: input = [
    1, 0, 100, 10, 5, -1, 100, 5, 0, 200, 7, 3445, 26, 26, 26, 100, 0, 2, -1,
    -1, -1, 2, 11,
  ]
  */
  const occurrence = {};
  const repeators = [];
  for (let i = 0; i <= arry.length - 1; i++) {
    if (occurrence[arry[i]]) {
      occurrence[arry[i]] += 1;
    } else {
      occurrence[arry[i]] = 1;
    }
  }
  for (let value in occurrence) {
    if (occurrence[value] > 1) {
      repeators.push(value);
    }
  }
  return repeators;
}

module.exports = findReapeators;
