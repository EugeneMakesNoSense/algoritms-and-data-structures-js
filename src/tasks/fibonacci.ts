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
  if (number < 2) {
    return number - 1;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= number; i++) {
    const result = a + b
    a = b 
    b = result
  }

  return b;
};

export const getFibonacciSequence = (number: number): number[] => {
  const result = [0, 1];

  for (let i = 2; i <= number; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};
