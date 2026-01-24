const partitioning = (
  data: number[],
  leftPointer: number,
  rightPointer: number,
): number => {
  const pivotIndex = rightPointer;
  const pivot = data[pivotIndex];

  rightPointer -= 1;

  while (true) {
    while (data[leftPointer] < pivot) {
      leftPointer += 1;
    }

    while (data[rightPointer] > pivot) {
      if (rightPointer <= 0) {
        break;
      }

      rightPointer -= 1;
    }

    if (leftPointer >= rightPointer) {
      break;
    }

    [data[leftPointer], data[rightPointer]] = [
      data[rightPointer],
      data[leftPointer],
    ];

    leftPointer += 1;
  }

  [data[leftPointer], data[pivotIndex]] = [data[pivotIndex], data[leftPointer]];

  return leftPointer;
};

const recursion = (
  numbers: number[],
  startIndex: number,
  endIndex: number,
): number => {
  const pivotIndex = partitioning(numbers, startIndex, endIndex);

  if (pivotIndex >= numbers.length - 1) {
    return numbers[pivotIndex]
  }

  return recursion(numbers, pivotIndex, endIndex);
};

export const getGreatestNumber = (numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error("The array is empty.");
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  return recursion(numbers, 0, numbers.length - 1);
};
