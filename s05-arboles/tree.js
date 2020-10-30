//arboles

class NodoArbol {
    constructor(valor) {
        this.valor = valor
        this.hijoIzq
        this.hijoDer
    }
}

function alturaNodo(nodo) {
    if(!nodo) {
        return 0
    } else {
        var alturaHijoIzq = alturaNodo(nodo.hijoIzq)
        var alturaHijoDer = alturaNodo(nodo.hijoDer)
        if(alturaHijoDer > alturaHijoIzq)
            return alturaHijoDer + 1
        else
            return alturaHijoIzq + 1
    }
}

function bfsPorNivel(raiz) {
    var resultado = []
    if(!raiz)
        return null
    var cola = []
    cola.push(raiz)
    while(cola.length != 0) {
        var elementosPorNivel = cola.length
        var nivel = []
        for(var i=0; i<elementosPorNivel; i++) {
            var actual = cola.shift()
            nivel.push(actual.valor)
            if(actual.hijoIzq)
                cola.push(actual.hijoIzq)
            if(actual.hijoDer)
                cola.push(actual.hijoDer)
        }
        resultado.push(nivel)
    }
    return resultado
}

function bfs(raiz) {
    var resultado = []
    if(!raiz)
        return null
    var cola = []
    cola.push(raiz)
    while(cola.length != 0) {
        var nodoActual = cola.shift()
        resultado.push(nodoActual.valor)
        if(nodoActual.hijoIzq)
            cola.push(nodoActual.hijoIzq)
        if(nodoActual.hijoDer)
            cola.push(nodoActual.hijoDer)
    }
    return resultado
}

function dfsPreOrder(raiz) {
    var resultado = []
    function preOrder(nodo) {
        if(!nodo)
            return
        //visitar raiz
        resultado.push(nodo.valor)
        //recorrer sub arbol izq
        preOrder(nodo.hijoIzq)
        //recorrer sub arbol der
        preOrder(nodo.hijoDer)
    }
    preOrder(raiz)
    return resultado
}

function dfsInOrder(raiz) {
    var resultado = []
    function inOrder(nodo) {
        if(!nodo)
            return
        inOrder(nodo.hijoIzq)
        resultado.push(nodo.valor)
        inOrder(nodo.hijoDer)
    }
    inOrder(raiz)
    return resultado
}

function dfsPostOrder(raiz) {
    var resultado = []
    function postOrder(nodo) {
        if(!nodo)
            return
        postOrder(nodo.hijoIzq)
        postOrder(nodo.hijoDer)
        resultado.push(nodo.valor)
    }
    postOrder(raiz)
    return resultado
}

var nodoRaiz = new NodoArbol('D')
var nodoHijoB = new NodoArbol('B')
var nodoHijoE = new NodoArbol('E')
nodoRaiz.hijoIzq = nodoHijoB
nodoRaiz.hijoDer = nodoHijoE
nodoHijoB.hijoDer = new NodoArbol('C')
nodoHijoB.hijoIzq = new NodoArbol('A')
nodoHijoE.hijoDer = new NodoArbol('F')

console.log(alturaNodo(nodoRaiz))
//BFS Resultado = [ D,B,E,A,C,F ]
console.log(bfs(nodoRaiz))

//DFS Pre order Resultado = [ D,B,A,C,E,F ]
console.log(dfsPreOrder(nodoRaiz))

//DFS In order Resultado = [ A,B,C,D,E,F ]
console.log(dfsInOrder(nodoRaiz))

//DFS Post order Resultado = [ A,C,B,F,E,D ]
console.log(dfsPostOrder(nodoRaiz))
