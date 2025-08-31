import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Queue } from './queue.mjs';

describe('Queue', () => {
    describe('enqueue', () => {
        it('should add to queue', () => {
            const queue = new Queue()

            queue.enqueue(4)
            queue.enqueue(5)

            assert.equal(queue.pick(), 4)
            assert.equal(queue.size, 2)
        })
    })

    describe('dequeue', () => {
        it('should remove from queue and return', () => {
            const queue = new Queue()

            queue.enqueue(4)
            queue.enqueue(5)

            assert.equal(queue.dequeue(), 4)
            assert.equal(queue.pick(), 5)
            assert.equal(queue.size, 1)
        })

        it('should return null if queue is empty', () => {
            const queue = new Queue()

            queue.enqueue(4)
            queue.enqueue(5)
            queue.dequeue()
            queue.dequeue()

            assert.equal(queue.dequeue(), null)
            assert.equal(queue.size, 0)
        })
    })
})