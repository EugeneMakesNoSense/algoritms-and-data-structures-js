import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { getFibonacciNumber, getFibonacciSequence } from './fibonacci.mjs';

describe('getFibonacciNumber', () => {
    it('should return Fibonacci number', () => {
        // 0 1 1 2 3 5 8 13 21 34 55 89

        assert.equal(getFibonacciNumber(10), 55)
    })
})

describe('getFibonacciSequence', () => {
    it('should return sequence', () => {
        const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21]
        const number = 8

        assert.deepEqual(getFibonacciSequence(number), expectedResult)
    })
})