export class QuickSort {
  public static sort<T>(data: T[]): T[] {
    if (data.length <= 1) {
      return data;
    }

    const clonedData = structuredClone(data);

    return this.recursion<T>(clonedData, 0, clonedData.length - 1);
  }

  private static recursion<T>(
    data: T[],
    startIndex: number,
    endIndex: number,
  ): T[] {
    if (startIndex >= endIndex) {
      return data;
    }

    const pivotIndex = this.partitioning<T>(data, startIndex, endIndex);

    this.recursion<T>(data, startIndex, pivotIndex - 1);
    this.recursion<T>(data, pivotIndex + 1, endIndex);

    return data;
  }

  public static partitioning<T>(
    data: T[],
    leftPointer: number,
    rightPointer: number,
  ): number {
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

    [data[leftPointer], data[pivotIndex]] = [
      data[pivotIndex],
      data[leftPointer],
    ];

    return leftPointer;
  }
}
