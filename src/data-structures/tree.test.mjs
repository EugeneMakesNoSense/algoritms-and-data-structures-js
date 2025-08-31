import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Tree } from './tree.mjs';

describe('Tree', () => {
    describe('add', () => {
        it('should add multiple nodes to a tree', () => {
            const tree = new Tree()

            tree.add(6)
            tree.add(4, 6)
            tree.add(2, 6)
            tree.add(1, 2)

            assert.deepEqual(tree.deepFirstTraversal(), [6, 4, 2, 1])
        })
    })

    describe('breadthFirstSearch', () => {
        it('should find node', () => {
            const tree = new Tree()

            tree.add(6)
            tree.add(4, 6)
            tree.add(2, 6)
            tree.add(1, 2)

            const result = tree.breadthFirstSearch(2)

            assert.equal(result.value, 2)
            assert.equal(result.children.some(child => child.value === 1), true)
        })
    })

    describe('deepFirstSearch', () => {
            const tree = new Tree()

            tree.add(6)
            tree.add(4, 6)
            tree.add(2, 6)
            tree.add(1, 2)

            const result = tree.deepFirstSearch(2)

            assert.equal(result.value, 2)
            assert.equal(result.children.some(child => child.value === 1), true)
    })
})