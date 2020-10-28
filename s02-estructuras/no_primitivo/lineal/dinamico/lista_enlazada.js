//listas enlazadas
class Nodo {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class ListaVinculada {
    constructor() {
        this.head = null
        this.size = 0
    }
    //insertar
    insertFirst(data) {
        this.head = new Nodo(data, this.head)
        this.size++
    }

    insertLast(data) {
        var last = new Nodo(data)
        var actual 
        if(!this.head) {
            this.head = last
        } else {
            actual = this.head
            while(actual.next) {
                actual = actual.next
            }
            actual.next = last
        }
        this.size++
    }
    //imprimir
    printList() {
        var nodoActual = this.head
        while(nodoActual) {
            console.log(nodoActual.data)
            nodoActual = nodoActual.next
        }
    }
    //eliminar
    removeAt(index) {
        if (index < 0 || index >= this.size)
            return
        
        var current = this.head
        var previous
        var count = 0

        if (index == 0) {
            this.head = current.next
        } else {
            while(count < index) {
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }
    //borrar lista
    clear() {
        this.head = null
        this.size = 0
    }

}

var lista1 = new ListaVinculada()
lista1.insertFirst(10)
lista1.insertFirst(20)
lista1.insertFirst(30)
lista1.insertLast(50)
// lista1.printList()

lista1.removeAt(1)
lista1.printList()

lista1.clear()
lista1.printList()