import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { QuickSort } from './quick-sort.ts';

describe('QuickSort', () => {
    it('should sort array', () => {
        const input = [2, 6, 3, 15, 12, 5]
        const expected = [2, 3, 5, 6, 12, 15]

        assert.deepEqual(QuickSort.sort<number>(input), expected)
    })

    it('should return if one item in the array', () => {
        const array = [2]

        assert.deepEqual(QuickSort.sort<number>(array), array)
    })
})