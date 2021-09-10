function findFactorial(factorialNumber) {
  let factorialResult = 1;
  for (let i = 1; i <= factorialNumber; i++) {
    factorialResult *= i;
  }
  return factorialResult;
}

module.exports = findFactorial;
