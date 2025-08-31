import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { BinarySearchTree } from './binary-search-tree.mjs';

describe('BinarySearchTree', () => {
    describe('insert', () => {
        it('should insert', () => {
            const tree = new BinarySearchTree()

            tree.insert(10)
            tree.insert(40)
            tree.insert(5)
            tree.insert(3)
            tree.insert(1)

            const expectedBreadthFirst = [10, 5, 40, 3, 1]
            const expectedDeepFirst = [10, 5, 3, 1, 40]

            assert.deepEqual(tree.breadthFirstTraversal(), expectedBreadthFirst)
            assert.deepEqual(tree.depthFirstTraversal(), expectedDeepFirst)
        })
    })

    describe('search', () => {
        it('should return true when found', () => {
            const tree = new BinarySearchTree()

            tree.insert(10)
            tree.insert(40)
            tree.insert(5)
            tree.insert(3)
            tree.insert(1)

            assert.equal(tree.search(5), true)
        })

        it('should return false when not found', () => {
            const tree = new BinarySearchTree()

            tree.insert(10)
            tree.insert(40)
            tree.insert(5)
            tree.insert(3)
            tree.insert(1)

            assert.equal(tree.search(41), false)
        })
    })
})