function removeDuplicate(numberarry) {
  //Hint: // input = [1,2,2,3,3,2,3,4]
  //const unique = [];
  const occurrence = {};
  for (let i = 0; i < numberarry.length; i++) {
    // if (!unique.includes(numberarry[i])) {
    //   unique.push(numberarry[i]);
    // }
    occurrence[numberarry[i]] = i;
  }
  return Object.keys(occurrence);
}

module.exports = removeDuplicate;
