import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { compareTrees } from './compare-trees.mjs';
import { Tree } from '../data-structures/tree.mjs';

describe('compareTrees', () => {
    it('should return true if threes are equal', () => {
        const firstTree = new Tree()
        firstTree.add(6)
        firstTree.add(4, 6)
        firstTree.add(2, 6)
        firstTree.add(1, 2)

        const secondTree = new Tree()
        secondTree.add(6)
        secondTree.add(4, 6)
        secondTree.add(2, 6)
        secondTree.add(1, 2)

        assert.equal(compareTrees(firstTree, secondTree), true)
    })

    it('should return false if threes have different structure', () => {
        const firstTree = new Tree()
        firstTree.add(6)
        firstTree.add(4, 6)
        firstTree.add(2, 6)
        firstTree.add(1, 2)

        const secondTree = new Tree()
        secondTree.add(6)
        secondTree.add(4, 6)
        secondTree.add(2, 6)
        secondTree.add(1, 2)
        secondTree.add(12, 2)

        assert.equal(compareTrees(firstTree, secondTree), false)
    })

    it('should return false if threes have different values', () => {
        const firstTree = new Tree()
        firstTree.add(6)
        firstTree.add(4, 6)
        firstTree.add(3, 6)
        firstTree.add(1, 3)

        const secondTree = new Tree()
        secondTree.add(6)
        secondTree.add(4, 6)
        secondTree.add(2, 6)
        secondTree.add(1, 2)

        assert.equal(compareTrees(firstTree, secondTree), false)
    })
})