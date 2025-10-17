import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { binarySearch } from './binary-search.ts';

describe('binarySearch', () => {
    it('should find in array', () => {
        const array = [2, 3, 5, 6, 12, 15]
        const value = 12

        const expectedIndex = 4

        assert.deepEqual(binarySearch<number>(array, value), expectedIndex)
    })

    it('should not find in array', () => {
        const array = [2, 3, 5, 6, 12, 15]
        const value = 100

        const expectedIndex = -1

        assert.deepEqual(binarySearch<number>(array, value), expectedIndex)
    })
})