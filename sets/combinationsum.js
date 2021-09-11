function combinationSum(numbers, target) {
  const combinations = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const sum = i !== j ? numbers[j] + numbers[i] : 0;
      if (sum === target) {
        combinations.push([numbers[i], numbers[j]]);
      }
    }
  }
  return { combinations, target };
}

module.exports = combinationSum;
