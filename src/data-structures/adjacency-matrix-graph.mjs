import { Queue } from './queue.mjs'
import { Stack } from './stack.mjs'

export class AdjacencyMatrixGraph {
    #matrix

    constructor(matrix) {
        this.#matrix = matrix
    }

    breathFirstSearchPath(start, end) {
        const seen = Array(this.#matrix.length).fill(false)
        const previous = Array(this.#matrix.length).fill(-1)

        const queue = new Queue()

        queue.enqueue(start)
        seen[start] = true

        while(queue.size) {
            const currentIndex = queue.dequeue()
            const current = this.#matrix[currentIndex]

            if (currentIndex === end) {
                break 
            }

            for (let i = 0; i < current.length; i++) {
                if (!current[i]) {
                    continue
                }

                if (seen[i]) {
                    continue
                }

                queue.enqueue(i)
                previous[i] = currentIndex
                seen[i] = true
            }
        }

        const resultStack = new Stack()

        let current = end

        while(previous[current] !== -1) {
            resultStack.push(current)

            current = previous[current]
        }

        resultStack.push(start)

        const result = []

        while(resultStack.size) {
            result.push(resultStack.pop())
        }

        return result
    }
}