class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items[this.items.length] = element
        console.log(`${element} encolado`)
    }

    dequeue() {
        if(this.items.length == 0) return
        console.log(`${this.items.splice(0,1)} desencolado`)
        
    }

    peek() {
        console.log(`elemento top: ${this.items[0]}`)
        return this.items[0]
    }

    isEmpty() {
        console.log(this.items.length == 0 ? 'Cola vacía' : 'Cola llena')
        return this.items.length == 0
    }

    size() {
        console.log(`${this.items.length} elementos`)
        return this.items.length
    }

    print() {
        for(let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }

    clear() {
        this.items = []
        console.log('Cola eliminada')
        return this.items
    }
}

let cola = new Queue()

cola.enqueue(100)
cola.enqueue(200)
cola.enqueue(300)
cola.enqueue(400)
cola.enqueue(500)

cola.dequeue()
cola.print()
