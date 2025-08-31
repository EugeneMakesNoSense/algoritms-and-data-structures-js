import { LinkedList } from "./linked-list.mjs";

export class Queue {
    #linkedList

    constructor() {
        this.#linkedList = new LinkedList()
    }

    enqueue(value) {
        this.#linkedList.add(value, this.#linkedList.size + 1)
    }

    dequeue() {
        if (this.#linkedList.size === 0) {
            return null
        }

        const item = this.#linkedList.pick(1)
        this.#linkedList.remove(1)

        return item
    }

    pick() {
        return this.#linkedList.pick(1)
    }

    get size () {
        return this.#linkedList.size
    }
} 