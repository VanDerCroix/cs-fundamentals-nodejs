//hash table

const { hashFunction } = require('./hash')

class HashTable {
    constructor(size) {
        this.values = []
        this.size = size
    }

    //insertar
    insert(value) {
        var insertAt = hashFunction(value, this.size)
        console.log(`hashValue: ${insertAt} for ${value}`)
        if(this.values[insertAt]) {
            //colisión
            var probingValue = this.getFreeIndex(insertAt)
            insertAt = probingValue
        }
        this.values[insertAt] = value
        console.log(`val: ${value} inserted at index: ${insertAt}`)
        return insertAt
    }

    getFreeIndex(start) {
        //linear probing
        var nextIndex = start == this.size - 1 ? 0 : start + 1
        while(nextIndex != start) {
            if(!this.values[nextIndex]) {
                return nextIndex
            }
            nextIndex = nextIndex == this.size - 1 ? 0 : nextIndex + 1
        }
        return -1
    }

    //imprimir
    printValues() {
        this.values.forEach((val, ind) => {
            console.log(`i:${ind} v:${val}`)
        })
    }

    //acceso
    getIndexOf(value) {
        var searchAt = hashFunction(value, this.size)
        if(this.values[searchAt] != value) {
            //linear search
            var nextIndex = searchAt == this.size - 1 ? 0 : searchAt + 1
            while(nextIndex != searchAt) {
                if(this.values[nextIndex] == value) {
                    return nextIndex
                }
                nextIndex = nextIndex == this.size -1 ? 0 : nextIndex + 1
            }
        }
        return searchAt
    }
}

var tablaHash = new HashTable(8)
tablaHash.insert('bulbasaur')
tablaHash.insert('charmander')
tablaHash.insert('squirtle')
tablaHash.insert('sandshrew')
tablaHash.insert('eevee')
tablaHash.insert('pikachu')
tablaHash.insert('mew')
tablaHash.printValues()

console.log(tablaHash.getIndexOf('mew'))
console.log(tablaHash.getIndexOf('eevee'))