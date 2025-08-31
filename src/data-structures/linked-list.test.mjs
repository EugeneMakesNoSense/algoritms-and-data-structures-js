import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { LinkedList } from './linked-list.mjs';

describe('LinkedList', () => {
    describe('add', () => {
        it('should add', () => {
            const list = new LinkedList()

            list.add(5, 1)
            list.add(10, 2)
            list.add(7, 1)
            list.add(1, 3)
            list.add(4, 5)

            assert.equal(list.size, 5)
            assert.deepEqual(list.toArray, [7, 5, 1, 10, 4])
        })

        it('should throw if position is not valid', () => {
            const list = new LinkedList()

            assert.throws(() => list.add(1, 2))
        })
    })

    describe('pick', () => {
        it('should pick first', () => {
            const list = new LinkedList()

            list.add(7, 1)
            list.add(9, 2)
            list.add(1, 3)
            list.add(10, 4)

            assert.equal(list.pick(1), 7)
        })

        it('should pick last', () => {
            const list = new LinkedList()

            list.add(7, 1)
            list.add(9, 2)
            list.add(1, 3)
            list.add(10, 4)

            assert.equal(list.pick(4), 10)
        })

        it('should pick middle', () => {
            const list = new LinkedList()

            list.add(7, 1)
            list.add(9, 2)
            list.add(1, 3)
            list.add(10, 4)

            assert.equal(list.pick(2), 9)
        })
    })

    describe('remove', () => {
        it('should remove from the middle of list', () => {
            const list = new LinkedList()

            list.add(5, 1)
            list.add(10, 2)
            list.add(7, 3)
            list.add(1, 4)
            list.remove(3)

            assert.equal(list.size, 3)
            assert.deepEqual(list.toArray, [5, 10, 1])
        })

        it('should remove from the end of list', () => {
            const list = new LinkedList()

            list.add(5, 1)
            list.add(10, 2)
            list.add(7, 3)
            list.add(1, 4)
            list.remove(4)

            assert.equal(list.size, 3)
            assert.deepEqual(list.toArray, [5, 10, 7])
        })

        it('should remove from the start of list', () => {
            const list = new LinkedList()

            list.add(5, 1)
            list.add(10, 2)
            list.add(7, 3)
            list.add(1, 4)
            list.remove(1)

            assert.equal(list.size, 3)
            assert.deepEqual(list.toArray, [10, 7, 1])
        })

        it('should remove till the list is empty', () => {
            const list = new LinkedList()

            list.add(7, 1)
            list.add(9, 2)
            list.remove(1)
            list.remove(1)

            assert.equal(list.size, 0)
            assert.deepEqual(list.toArray, [])
        })
    })

    describe('find', () => {
        it('should find in list', () => {
            const list = new LinkedList()

            list.add(5, 1)
            list.add(10, 2)
            list.add(7, 3)
            list.add(1, 4)

            assert.deepEqual(list.toArray, [5, 10, 7, 1])
            assert.equal(list.find(7), 3)
            assert.equal(list.find(70), -1)
        })
    })
})