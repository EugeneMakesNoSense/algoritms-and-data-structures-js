import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { PathFinder } from './path-finder.mjs';

describe('PathFinder', () => {
    it('should find the way to the end', () => {
        const maze = [
            ['#', '#', '#', '#', 'E', '#'],
            ['#', ' ', ' ', '#', ' ', '#'],
            ['#', ' ', '#', '#', ' ', '#'],
            ['#', '#', ' ', ' ', ' ', '#'],
            ['#', ' ', ' ', ' ', ' ', '#'],
            ['#', 'S', '#', '#', '#', '#']
        ]

        const wallSign = '#'
        const start = [5, 1]
        const end = [0, 4]

        const expectedResult = [
            [5, 1], [4, 1],
            [4, 2], [4, 3],
            [4, 4], [3, 4],
            [2, 4], [1, 4],
            [0, 4]
        ]

        const pathFinder = new PathFinder(maze, start, end)

        assert.deepEqual(pathFinder.findPath(), expectedResult)
    })
})