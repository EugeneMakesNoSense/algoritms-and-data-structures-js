import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { selectionSort } from './selection-sort.ts';

describe('selectionSort', () => {
    it('should sort array', () => {
        const input = [2, 6, 3, 15, 12, 5]

        const expected = [2, 3, 5, 6, 12, 15]

        assert.deepEqual(selectionSort<number>(input), expected)
    })

    it('should return if one item in array', () => {
        const array = [2]

        assert.deepEqual(selectionSort<number>(array), array)
    })
})