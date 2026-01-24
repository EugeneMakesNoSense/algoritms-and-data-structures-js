import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { QuickSort } from './quick-sort.ts';

describe('QuickSort', () => {
    it('should sort array', () => {
        const input = [1, 2, 20, 15, 4, 7, 30, 40, 10]
        const expected = [1, 2, 4, 7, 10, 15, 20, 30, 40]

        assert.deepEqual(QuickSort.sort<number>(input), expected)
    })

    it('should return if one item in the array', () => {
        const array = [2]

        assert.deepEqual(QuickSort.sort<number>(array), array)
    })
})