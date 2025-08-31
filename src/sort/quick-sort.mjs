export class QuickSort {
    #data

    sort(data) {
        this.#data = structuredClone(data)

        if (this.#data <= 1) {
            return this.#data
        }

        return this.#recursion(0, this.#data.length - 1)
    }

    #recursion(startIndex, endIndex) {
        if (startIndex >= endIndex) {
            return this.#data
        }

        const pivotIndex = this.#partitioning(startIndex, endIndex)

        this.#recursion(startIndex, pivotIndex - 1)
        this.#recursion(pivotIndex + 1, endIndex)

        return this.#data
    }

    #partitioning (startIndex, endIndex) {
        const pivot = this.#data[endIndex]

        let carriage = startIndex - 1

        for (let i = startIndex; i < endIndex; i++) {
            if (this.#data[i] <= pivot) {
                carriage++
                this.#swap(carriage, i)
            }
        }

        carriage++
        this.#swap(endIndex, carriage)

        return carriage
    }

    #swap(firstIndex, secondIndex) {
        const temp = this.#data[firstIndex]

        this.#data[firstIndex] = this.#data[secondIndex]
        this.#data[secondIndex] = temp
    }
}