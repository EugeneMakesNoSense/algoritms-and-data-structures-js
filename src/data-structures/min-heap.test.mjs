import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { MinHeap } from './min-heap.mjs'

describe('MinHeap', () => {
    describe('insert', () => {
        it('should insert', () => {
            const heap = new MinHeap()
    
            heap.insert(10)
            heap.insert(20)
            heap.insert(30)
            heap.insert(5)
    
            assert.deepEqual(heap.data, [5, 10, 30, 20])
        })
    })

    describe('pop', () => {
        it('should pop', () => {
            const heap = new MinHeap()
        
            heap.insert(10)
            heap.insert(20)
            heap.insert(30)
            heap.insert(5)
            heap.pop()
    
            assert.deepEqual(heap.data, [10, 20, 30])
        })
    })
})