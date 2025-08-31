export class PathFinder {
    #directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    #wallSign = '#'

    #maze
    #startPosition
    #endPosition
    #seen
    #path = []

    constructor(maze, startPosition, endPosition) {
        this.#maze = maze
        this.#startPosition = startPosition
        this.#endPosition = endPosition
    
        this.#seen = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(false))
    }

    #walk(position) {
        if (
            position[0] < 0 || position[0] >= this.#maze.length ||
            position[1] < 0 || position[1] >= this.#maze[0].length
        ) {
            return false
        }

        if (this.#seen[position[0]][position[1]]) {
            return false
        }

        const cell = this.#maze[position[0]][position[1]]

        if (cell === this.#wallSign) {
            return false
        }

        if (position[0] === this.#endPosition[0] && position[1] === this.#endPosition[1]) {
            this.#path.push(position)
            return true
        }

        this.#seen[position[0]][position[1]] = true
        this.#path.push(position)

        for (const direction of this.#directions) {
            const found = this.#walk([position[0] + direction[0], position[1] + direction[1]])

            if (found) {
                return this.#path
            }
        }

        this.#path.pop()

        return false
    }

    findPath() {
        return this.#walk(this.#startPosition)
    }
}