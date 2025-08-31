export class AdjacencyListGraph {
    #list

    constructor(list) {
        this.#list = list
    }

    #deepFirstSearchPathRecursive(current, end, seen, path) {
        const adjacencies = this.#list[current]

        if (current === end) {
            path.push(current)

            return true
        }

        if (seen[current]) {
            return false
        }

        seen[current] = true
        path.push(current)

        for (let i = 0; i < adjacencies.length; i++) {
            const next = adjacencies[i].to

            const isFound = this.#deepFirstSearchPathRecursive(next, end, seen, path)

            if (isFound) {
                return true
            }
        }

        path.pop()

        return false
    }

    deepFirstSearchPath(start, end) { // O(V+E)
        const path = []
        const seen = Array(this.#list.length).fill(false)

        this.#deepFirstSearchPathRecursive(start, end, seen, path)

        return path
    }
}