class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        this.count++
        console.log(`${element} apilado`)
    }

    pop() {
        if(this.count == 0) return
        let deleteItem = this.items[this.count - 1]
        this.count--
        console.log(`${deleteItem} desapilado`)
    }

    peek() {
        console.log(`elemento top: ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    isEmpty() {
        console.log(this.count == 0 ? 'Pila vacía' : 'Pila llena')
        return this.count == 0
    }

    size() {
        console.log(`${this.count} elementos`)
        return this.count
    }

    print() {
        for(let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }

    clear() {
        this.items = []
        this.count = 0
        console.log('Pila eliminada')
        return this.items
    }
}

const pila = new Stack()

pila.push(100)
pila.push(200)
pila.push(300)
pila.pop()

pila.print()