function bubbleSort(numberarry) {
  let done = false;
  while (!done) {
    done = true;
    for (let index = 0; index < numberarry.length; index++) {
      if (numberarry[index] > numberarry[index + 1]) {
        done = false;
        let temp = numberarry[index];
        numberarry[index] = numberarry[index + 1];
        numberarry[index + 1] = temp;
      }
    }
  }
  return numberarry;
}

module.exports = bubbleSort;
