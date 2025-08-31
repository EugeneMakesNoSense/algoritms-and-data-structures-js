import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { LeastRecentlyUsedCache } from './least-recently-used-cache.mjs';

describe('LeastRecentlyUsedCache', () => {
    describe('update', () => {
        it('should update and remove least recently used', () => {
                const lru = new LeastRecentlyUsedCache(5)

                lru.update('1', 1)
                lru.update('2', 2)
                lru.update('3', 3)
                lru.update('4', 4)
                lru.update('5', 5)
                lru.update('6', 6)
                lru.update('3', 7)

                assert.deepEqual(lru.toArray, [7, 6, 5, 4, 2])
        })
    })

    describe('get', () => {
        it('should return and update position', () => {
                const lru = new LeastRecentlyUsedCache(5)

                lru.update('1', 1)
                lru.update('2', 2)
                lru.update('3', 3)
                lru.update('4', 4)
                lru.update('5', 5)

                assert.equal(lru.get('3'), 3)
                assert.deepEqual(lru.toArray, [3, 5, 4, 2, 1])
        })
    })
})