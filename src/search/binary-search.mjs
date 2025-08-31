export const binarySearch = (array, value) => {
    let startIndex = 0
    let endIndex = array.length - 1

    do {
        const middleIndex = Math.floor((endIndex + startIndex) / 2)
        const middleValue = array[middleIndex]

        if (middleValue === value) {
            return middleIndex
        }

        if (middleValue < value) {
            startIndex = middleIndex + 1
        } else {
            endIndex = middleIndex - 1
        }
    } while(startIndex <= endIndex)

    return -1 
}