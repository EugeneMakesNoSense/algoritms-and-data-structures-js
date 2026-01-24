import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { getGreatestNumber } from './greatest-number.ts'

describe('getGreatestNumber', () => {
    it('should find greatest number', () => {
        const input = [2, 5, 30, 7, 11]
        const expected = 30

        assert.equal(getGreatestNumber(input), expected)
    })
})