export const insertionSort = <T>(input: T[]): T[] => {
    const data = structuredClone(input)

    for (let i = 1; i < data.length; i++) {
        const currentValue = data[i]
        let currentIndex = i
    
        for (let j = i - 1; j >= 0; j--) {
            if (data[j] > currentValue) {
                data[currentIndex] = data[j]
                currentIndex--
            } else {
                break;
            }
        }

        data[currentIndex] = currentValue
    }

    return data
}