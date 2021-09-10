function countDisimilarChars(input1, input2) {
  //Hint: input = "karolin", "kathrin" output: 3
  const val1 = input1.toLowerCase();
  const val2 = input2.toLowerCase();

  const maxLength = val1.length > val2.length ? val1.length : val2.length;
  let distance = 0;
  for (let i = 0; i <= maxLength - 1; i++) {
    if (val1[i] !== val2[i]) {
      distance += 1;
    }
  }
  return distance;
}

module.exports = countDisimilarChars;
