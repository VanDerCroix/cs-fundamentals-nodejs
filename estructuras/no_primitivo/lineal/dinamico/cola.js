//colas
class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
}

class Queue {
    constructor() {
        this.head = null
        this.size = 0
    }

    //encolar
    enqueue(element) {
        this.head = new Node(element, this.head)
        this.size++
    }

    //desencolar
    dequeue() {
        if(this.size == 0) return
        var current = this.head
        var previous
        while (current.next) {
            previous = current
            current = current.next
        }
        previous.next = current.next
        this.size--
    }

    //imprimir
    print() {
        var current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

var cola1 = new Queue()
cola1.enqueue(10)
cola1.enqueue(20)
cola1.enqueue(30)
cola1.enqueue(40)

cola1.dequeue()

cola1.print()