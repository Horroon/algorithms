function removeDuplicate(numberarry) {
  //Hint: // input = [1,2,2,3,3,2,3,4]
  const unique = [];
  for (let i = 0; i < numberarry.length; i++) {
    if (!unique.includes(numberarry[i])) {
      unique.push(numberarry[i]);
    }
  }
  return unique;
}

module.exports = removeDuplicate;
