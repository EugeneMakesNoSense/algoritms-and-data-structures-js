import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { selectionSort } from './selection-sort.ts';

describe('selectionSort', () => {
    it('should sort array', () => {
        const input = [1, 2, 20, 15, 4, 7, 30, 40, 10]

        const expected = [1, 2, 4, 7, 10, 15, 20, 30, 40]

        assert.deepEqual(selectionSort<number>(input), expected)
    })

    it('should return if one item in array', () => {
        const array = [2]

        assert.deepEqual(selectionSort<number>(array), array)
    })
})