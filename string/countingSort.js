function countchars(input) {
  //Hint: input = "google"
  const occurrence = {};
  for (let i = 0; i < input.length; i++) {
    if (occurrence[input[i]]) {
      occurrence[input[i]] += 1;
    } else {
      occurrence[input[i]] = 1;
    }
  }
  return occurrence;
}

function maxchar(input) {
  //Hint: input = {a: 2, b: 3}
  let maxchar = null;
  for (let char in input) {
    maxchar = !maxchar ? char : maxchar;
    if (input[char] > input[maxchar]) {
      maxchar = char;
    }
  }
  return maxchar;
}

function secondMax(input) {
  let maxchar = null;
  let secondmaxchar = null;
  for (let char in input) {
    maxchar = maxchar ? maxchar : char;
    secondmaxchar = secondmaxchar ? secondmaxchar : char;
    if (input[char] > input[maxchar]) {
      maxchar = char;
    }
    if (input[secondmaxchar] < input[char] < input[maxchar]) {
      secondmaxchar = char;
    }
  }
  return { maxchar, secondmaxchar };
}
module.exports = { countchars, maxchar, secondMax };
