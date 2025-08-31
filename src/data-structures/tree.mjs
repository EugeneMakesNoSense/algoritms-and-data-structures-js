import { Queue } from './queue.mjs'

class Node {
    constructor(value) {
        this.value = value,
        this.children = []
    }
}

export class Tree {
    #root = null

    #deepFirstTraversalRecursion(node, result) {
        result.push(node.value)

        if (!node.children.length) {
            return
        }

        for (let i = 0; i < node.children.length; i++) {
            this.#deepFirstTraversalRecursion(node.children[i], result)
        }
    }

    deepFirstTraversal() {
        const result = []

        if (!this.#root) {
            return result
        }

        this.#deepFirstTraversalRecursion(this.#root, result)

        return result
    }

    breadthFirstSearch(value) {
        if (!this.#root) {
            return null
        }

        const queue = new Queue()
        queue.enqueue(this.#root)

        while(queue.size) {
            let current = queue.dequeue()

            if (current.value === value) {
                return current
            }

            if (current.children.length) {
                for (let i = 0; i < current.children.length; i++) {
                    queue.enqueue(current.children[i])
                }
            }
        }

        return null
    }

    #deepFirstSearchRecursion(value, node) {
        if (node.value === value) {
            return node
        }

        if (!node.children.length) {
            return null
        }

        for (let i = 0; i < node.children.length; i++) {
            const result = this.#deepFirstSearchRecursion(value, node.children[i])

            if (result) {
                return result
            }
        }

        return null
    }

    deepFirstSearch(value) {
        if (!this.#root) {
            return null
        }

        return this.#deepFirstSearchRecursion(value, this.#root)
    }

    add(value, parentValue) {
        if (!parentValue && !this.#root) {
            this.#root = new Node(value)

            return
        }

        const parentNode = this.breadthFirstSearch(parentValue)

        if (!parentNode) {
            throw new Error('Parent node not found')
        }

        parentNode.children.push(new Node(value))
    }

    get root() {
        return this.#root
    }
}