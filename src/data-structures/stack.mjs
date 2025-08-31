import { LinkedList } from "./linked-list.mjs";

export class Stack {
    #linkedList

    constructor() {
        this.#linkedList = new LinkedList()
    }

    push(value) {
        this.#linkedList.add(value, this.#linkedList.size + 1)
    }

    pop() {
        if (this.#linkedList.size === 0) {
            return null
        }

        const item = this.#linkedList.pick(this.#linkedList.size)
        this.#linkedList.remove(this.#linkedList.size)

        return item
    }

    pick() {
        return this.#linkedList.pick(this.#linkedList.size)
    }

    get size () {
        return this.#linkedList.size
    }
} 