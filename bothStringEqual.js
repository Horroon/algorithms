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
      for (let i = 0; i <= input1.length; i++) {
        if (input1.includes(input2[i])) {
          samechars.push(input2[i]);
        }
      }
      isSame = samechars.length === input1.length;
      return isSame;
    }
  } else {
    return isSame;
  }
}

module.exports = areStringsHavingSameChars;
