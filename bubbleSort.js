function bubbleSort(numberarry) {
  //Hint: input = [1,2,1,1,3,2,1,2,2]
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
