class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

export class LeastRecentlyUsedCache {
    #lookup = new Map()
    #reverseLookup = new Map()
    #head = null
    #tail = null
    #size = 0

    #capacity

    constructor(capacity) {
        this.#capacity = capacity
    }

    #detach(node) {
        const prevNode = node.prev
        const nextNode = node.next

        if (this.#tail === node) {
            this.#tail = this.#tail.prev
        }

        if (prevNode) {
            prevNode.next = nextNode
            node.prev = null
        }
        
        if (nextNode) {
            nextNode.prev = prevNode
            node.next = null
        }
    }

    #prepend(node) {
        if (!this.#size) {
            this.#head = node
            this.#tail = node

            return
        }

        this.#head.prev = node
        node.next = this.#head

        this.#head = node
    }

    #trimCache() {
        const key = this.#reverseLookup.get(this.#tail)
        this.#lookup.delete(key)
        this.#reverseLookup.delete(this.#tail)

        const prev = this.#tail.prev

        prev.next = null
        this.#tail.prev = null
    
        this.#tail = prev
    }

    #getNode(key) {
        const node = this.#lookup.get(key)

        if (!node) {
            return null
        }

        if (this.#size === 1) {
            return node.value
        }

        if (node === this.#head) {
            return node.value
        }

        this.#detach(node)
        this.#prepend(node)
        
        return node
    }

    get(key) {
        const node = this.#getNode(key)

        if (!node) {
            return null
        }

        return node.value
    }

    update(key, value) {
        const existingNode = this.#getNode(key)

        if (existingNode) {
            existingNode.value = value

            return
        }

        const node = new Node(value)
        this.#lookup.set(key, node)
        this.#reverseLookup.set(node, key)

        this.#prepend(node)

        this.#size++

        if (this.#size > this.#capacity) {
            this.#trimCache()
            this.#size--
        }
    }

    get toArray() {
        const result = []

        let current = this.#head

        do {
            if (!current) {
                break
            }

            result.push(current.value)

            current = current.next
        } while (current)

        return result
    }
}