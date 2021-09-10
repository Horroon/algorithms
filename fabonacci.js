function fabonacciSeries(range = 100) {
  //output: 0,1,1,2,3,5,8,13
  const fabonacci = [];

  for (let i = 0; i < range; i++) {
    const sum = fabonacci.length > 1 ? fabonacci[i - 1] + fabonacci[i - 2] : i;
    if (sum > 100) break;
    fabonacci[i] = sum;
  }
  return fabonacci;
}

module.exports = fabonacciSeries;
