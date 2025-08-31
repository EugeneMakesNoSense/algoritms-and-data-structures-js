export class MinHeap {
    #data = []

    #findParenIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    #findLeftChildrenIndex(index) {
        return index * 2 + 1
    }

    #findRightChildrenIndex(index) {
        return index * 2 + 2
    }

    #heapifyUp() {
        if (this.#data.length < 2) {
            return
        }

        let currentIndex = this.#data.length - 1
        let current = this.#data[currentIndex]
        let parentIndex = this.#findParenIndex(currentIndex)
        let parent = this.#data[parentIndex]


        while(currentIndex > 0 && current < parent) {
            this.#data[currentIndex] = parent
            this.#data[parentIndex] = current

            currentIndex = parentIndex
            current = this.#data[currentIndex]
            parentIndex = this.#findParenIndex(currentIndex)
            parent = this.#data[parentIndex]
        }
    }

    #heapifyDown() {
        if (this.#data.length < 2) {
            return
        }

        let currentIndex = 0
        let current = this.#data[currentIndex]
        let leftChildIndex = this.#findLeftChildrenIndex(currentIndex)
        let leftChild = this.#data[leftChildIndex]
        let rightChildIndex = this.#findRightChildrenIndex(currentIndex)
        let rightChild = this.#data[rightChildIndex]

        while(currentIndex < this.#data.length && (current > leftChild || current > rightChild)) {
            let minChildIndex

            if (!rightChild) {
                minChildIndex = leftChildIndex
            } else {
                minChildIndex = leftChild > rightChild ? rightChildIndex : leftChildIndex 
            }

            this.#data[currentIndex] = this.#data[minChildIndex]
            this.#data[minChildIndex] = current
            
            currentIndex = minChildIndex
            current = this.#data[currentIndex]
            leftChildIndex = this.#findLeftChildrenIndex(currentIndex)
            leftChild = this.#data[leftChildIndex]
            rightChildIndex = this.#findRightChildrenIndex(currentIndex)
            rightChild = this.#data[rightChildIndex]
        }
    }

    insert(value) {
        this.#data.push(value)
        this.#heapifyUp()
    }

    pop() {
        if (this.#data.length === 0) {
            return null
        }

        if (this.#data.length === 1) {
            return this.#data.pop()
        }
    
        const topValue = this.#data[0]
        const lastValue = this.#data.pop()
        this.#data[0] = lastValue
        this.#heapifyDown()

        return topValue
    }

    get data () {
        return this.#data
    }
}