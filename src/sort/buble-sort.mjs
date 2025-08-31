export const bubbleSort = (input) => {
    const data = structuredClone(input)

    if (data.length <= 1) {
        return data
    }

    for (let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length - 1 - i; j++) {
            if (data[j] > data[j + 1]) {
                const temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = temp
            }
        }
    }

    return data
}