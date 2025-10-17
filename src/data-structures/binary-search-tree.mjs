import { Queue } from "./queue.mjs"

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export class BinarySearchTree {
    #root

    #insertRecursive(node, value) {
        if (node.right === null && value > node.value) {
            node.right = new Node(value)

            return
        }

        if (node.left === null && value <= node.value) {
            node.left = new Node(value)

            return
        }

        if (value > node.value) {
            this.#insertRecursive(node.right, value)
        } else {
            this.#insertRecursive(node.left, value)
        }
    }
    
    insert(value) {
        if (!this.#root) {
            this.#root = new Node(value)

            return
        }

        this.#insertRecursive(this.#root, value)
    }

    breadthFirstTraversal() {
        const result = []

        if (!this.#root) {
            return result
        }

        const queue = new Queue()
        queue.enqueue(this.#root)

        while(queue.size) {
            const current = queue.dequeue()
            result.push(current.value)
            
            if (current.left) {
                queue.enqueue(current.left)
            }

            if (current.right) {
                queue.enqueue(current.right)
            }
        }

        return result
    }

    #depthFirsTraversalRecursive(node, result) {
        result.push(node.value)

        if (node.left) {
            this.#depthFirsTraversalRecursive(node.left, result)
        }

        if (node.right) {
            this.#depthFirsTraversalRecursive(node.right, result)
        }
    }

    depthFirstTraversal() {
        const result = []

        if (!this.#root) {
            return result
        }

        this.#depthFirsTraversalRecursive(this.#root, result)

        return result
    }

    search(value) {
        if (!this.#root) {
            return false
        }

        let current = this.#root

        while(current) {
            if (current.value === value) {
                return true
            }

            if (value > current.value) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return false
    }

    remove(value) {
        // find node
        // delete if no children
        // replace with children if one
        // if two: 
        // * find the last right in the left subtree or with the last left in the right subtree
        // * set instead of one you want to remove 
    }
}