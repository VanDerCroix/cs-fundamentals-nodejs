//pilas
class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    //push
    push(element) {
        this.top = new Node(element, this.top)
        this.size++
    }
    //pop
    pop() {
        if(this.size == 0) return
        var element = this.top
        this.top = this.top.next
        this.size--
    }
    //print
    print() {
        var current = this.top
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

var pila1 = new Stack()

pila1.push(10)
pila1.push(20)
pila1.push(30)
pila1.push(40)

pila1.pop()
pila1.print()