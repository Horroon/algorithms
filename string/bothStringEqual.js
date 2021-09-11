function areStringsHavingSameChars(input1, input2) {
  //Hint: input: input1='Mary', input2 = 'Army' like input
  const val1 = input1.toLowerCase();
  const val2 = input2.toLowerCase();
  let isSame = val1 === val2;
  if (!isSame) {
    if (val1.length !== val2.length) {
      return isSame;
    } else {
      const samechars = [];
      for (let i = 0; i <= val1.length; i++) {
        if (val1.includes(val2[i])) {
          samechars.push(val2[i]);
        }
      }
      isSame = samechars.length === val1.length;
      return isSame;
    }
  } else {
    return isSame;
  }
}

module.exports = areStringsHavingSameChars;
