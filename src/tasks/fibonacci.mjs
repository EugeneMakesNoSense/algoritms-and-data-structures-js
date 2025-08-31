export const getFibonacciNumber = (number) => {
    if (number < 2) {
        return number
    }

    return getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2)
}

export const getFibonacciSequence = (number) => {
    const result = [0, 1]

    for (let i = 2; i <= number; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
 
    return result
}