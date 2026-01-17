export const getFibonacciNumber = (number: number, memo: Map<number, number>): number => {
    if (number < 2) {
        return number
    }

    if (memo.has(number)) {
        return memo.get(number) as number
    }

    const result = getFibonacciNumber(number - 1, memo) + getFibonacciNumber(number - 2, memo)

    memo.set(number, result)

    return result
}

export const getFibonacciSequence = (number: number): number[] => {
    const result = [0, 1]

    for (let i = 2; i <= number; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
 
    return result
}