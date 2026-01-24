export const selectionSort = <T>(input: T[]): T[] => {
    const data = structuredClone(input)

    // data.length - 1 because inner loop checks the last element
    for (let i = 0; i < data.length - 1; i++) {
        let lowestItemIndex = i

        // j = i + 1 because i marked as lowest already 
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[lowestItemIndex]) {
                lowestItemIndex = j
            }
        }

        if (lowestItemIndex !== i) {
            [data[i], data[lowestItemIndex]] = [data[lowestItemIndex], data[i]]
        }
    }

    return data
}