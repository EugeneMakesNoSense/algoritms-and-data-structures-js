import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { AdjacencyMatrixGraph } from './adjacency-matrix-graph.mjs';

describe('AdjacencyMatrixGraph', () => {
    describe('breathFirstSearchPath', () => {
        //     >(1)<--->(4) ---->(5)
        //    /          |       /|
        // (0)     ------|------- |
        //    \   v      v        v
        //     >(2) --> (3) <----(6)
        const input = [
            [0, 3, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 7, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 5, 0, 2, 0],
            [0, 0, 18, 0, 0, 0, 1],
            [0, 0, 0, 1, 0, 0, 1],
        ];

        const graph = new AdjacencyMatrixGraph(input)

        const start = 1
        const end = 3

        const expectedResult = [1, 4, 3]

        assert.deepEqual(graph.breathFirstSearchPath(start, end), expectedResult)
    })
})