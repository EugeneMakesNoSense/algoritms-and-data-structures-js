class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

export class LinkedList {
    #head = null
    #tail = null
    #size = 0

    #validatePosition(position) {
        if (position > this.#size || position <= 0) {
            throw new Error('Invalid position')
        }
    }

    #validateAddPosition(position) {
        if (position > this.#size + 1 || position <= 0) {
            throw new Error('Invalid position')
        }
    }

    #traverse(position) {
        this.#validatePosition(position)

        let counter = 0
        let current = this.#head

        while (current) {
            counter++

            if (counter === position) {
                break
            }

            current = current.next
        }

        return current
    }

    #insertItem(newItem, nextItem, prevItem) {
        if (nextItem) {
            newItem.next = nextItem
            nextItem.prev = newItem
        }

        if (prevItem) {
            newItem.prev = prevItem
            prevItem.next = newItem
        }
    }

    add(value, position) {
        this.#validateAddPosition(position)

        const newItem = new Node(value)

        if (this.#size === 0) {
            this.#head = newItem
            this.#tail = newItem
        } else if (position === 1) {
            const nextItem = this.#head
            const prevItem = null

            this.#insertItem(newItem, nextItem, prevItem)

            this.#head = newItem
        } else if (position === this.#size + 1) {
            const nextItem = null
            const prevItem = this.#tail

            this.#insertItem(newItem, nextItem, prevItem)

            this.#tail = newItem
        } else {
            const nextItem = this.#traverse(position)
            const prevItem = nextItem.prev

            this.#insertItem(newItem, nextItem, prevItem)
        }

        this.#size++
    }

    pick(position) {
        this.#validatePosition(position)

        if (position === 1) {
            return this.#head?.value
        }

        if (position === this.#size) {
            return this.#tail?.value
        }

        return this.#traverse(position)?.value
    }

    find(value) {
        let position = 1
        let current = this.#head

        while (current) {
            if (current.value === value) {
                return position
            }

            if (!current.next) {
                return -1 
            }

            current = current.next
            position++
        }
    }

    remove(position) {
        this.#validatePosition(position)

        if (position === 1) {
            this.#head = this.#head.next

            if (this.#size === 1) {
                this.#tail = this.#head
            }

            this.#size--

            return
        }

        if (position === this.#size) {
            this.#tail = this.#tail.prev
            this.#tail.next = null

            this.#size--

            return
        }

        const itemToDelete = this.#traverse(position)
        const nextItem = itemToDelete.next
        const prevItem = itemToDelete.prev

        nextItem.prev = prevItem
        prevItem.next = nextItem

        itemToDelete.next = null
        itemToDelete.prev = null

        this.#size--
    }

    get head() {
        return this.#head
    }

    get size() {
        return this.#size
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