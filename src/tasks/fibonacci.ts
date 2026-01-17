export const getFibonacciNumberTopDown = (
  number: number,
  memo: Map<number, number>,
): number => {
  if (number < 2) {
    return number;
  }

  if (memo.has(number)) {
    return memo.get(number) as number;
  }

  const result =
    getFibonacciNumberTopDown(number - 1, memo) +
    getFibonacciNumberTopDown(number - 2, memo);

  memo.set(number, result);

  return result;
};

export const getFibonacciNumberBottomUp = (number: number): number => {
  const numbers = [0, 1];

  if (number === 1) {
    return numbers[0];
  }

  if (number === 2) {
    return numbers[1];
  }

  for (let i = 2; i <= number; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }

  return numbers[numbers.length - 1];
};

export const getFibonacciSequence = (number: number): number[] => {
  const result = [0, 1];

  for (let i = 2; i <= number; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};
