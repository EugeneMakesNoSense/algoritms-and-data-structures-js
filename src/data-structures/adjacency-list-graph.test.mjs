import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { AdjacencyListGraph } from './adjacency-list-graph.mjs';

describe('AdjacencyListGraph', () => {
    describe('deepFirstSearchPath', () => {
        //      (1) --- (4) ---- (5)
        //    /  |       |       /|
        // (0)   | ------|------- |
        //    \  |/      |        |
        //      (2) --- (3) ---- (6)
        const adjacencyList = [];
        adjacencyList[0] = [
            { to: 1, weight: 3 },
            { to: 2, weight: 1 },
        ];
        adjacencyList[1] = [
            { to: 0, weight: 3 },
            { to: 2, weight: 4 },
            { to: 4, weight: 1 },
        ];
        adjacencyList[2] = [
            { to: 1, weight: 4 },
            { to: 3, weight: 7 },
            { to: 0, weight: 1 },
        ];
        adjacencyList[3] = [
            { to: 2, weight: 7 },
            { to: 4, weight: 5 },
            { to: 6, weight: 1 },
        ];
        adjacencyList[4] = [
            { to: 1, weight: 1 },
            { to: 3, weight: 5 },
            { to: 5, weight: 2 },
        ];
        adjacencyList[5] = [
            { to: 6, weight: 1 },
            { to: 4, weight: 2 },
            { to: 2, weight: 18 },
        ];
        adjacencyList[6] = [
            { to: 3, weight: 1 },
            { to: 5, weight: 1 },
        ];

        const graph = new AdjacencyListGraph(adjacencyList)

        const start = 1
        const end = 3

        const expectedResult = [1, 0, 2, 3]

        assert.deepEqual(graph.deepFirstSearchPath(start, end), expectedResult)
    })
})