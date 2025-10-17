interface QuickSortInterface {
    sort<T>(data: T[]): T[]
}

export class QuickSort implements QuickSortInterface {
    public sort<T>(data: T[]): T[] {
        if (data.length <= 1) {
            return data
        }

        const clonedData = structuredClone(data)

        return this.recursion<T>(clonedData, 0, clonedData.length - 1)
    }

    private recursion<T>(data: T[], startIndex: number, endIndex: number): T[] {
        if (startIndex >= endIndex) {
            return data
        }

        const pivotIndex = this.partitioning<T>(data, startIndex, endIndex)

        this.recursion<T>(data, startIndex, pivotIndex - 1)
        this.recursion<T>(data, pivotIndex + 1, endIndex)

        return data
    }

    private partitioning<T>(data: T[], startIndex: number, endIndex: number): number {
        const pivot = data[endIndex]

        let carriage = startIndex - 1

        for (let i = startIndex; i < endIndex; i++) {
            if (data[i] <= pivot) {
                carriage++
                this.swap<T>(data, carriage, i)
            }
        }

        carriage++
        this.swap<T>(data, endIndex, carriage)

        return carriage
    }

    private swap<T>(data: T[], firstIndex: number, secondIndex: number) {
        const temp = data[firstIndex]

        data[firstIndex] = data[secondIndex]
        data[secondIndex] = temp
    }
}