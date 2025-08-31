import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Stack } from './stack.mjs';

describe('Stack', () => {
    describe('push', () => {
        it('should add to stack', () => {
            const stack = new Stack()

            stack.push(4)
            stack.push(5)

            assert.equal(stack.pick(), 5)
            assert.equal(stack.size, 2)
        })
    })

    describe('pop', () => {
        it('should remove from stack and return', () => {
            const stack = new Stack()

            stack.push(4)
            stack.push(5)

            assert.equal(stack.pop(), 5)
            assert.equal(stack.pick(), 4)
            assert.equal(stack.size, 1)
        })

        it('should return null if stack is empty', () => {
            const stack = new Stack()

            stack.push(4)
            stack.push(5)
            stack.pop()
            stack.pop()

            assert.equal(stack.pop(), null)
            assert.equal(stack.size, 0)
        })
    })
})