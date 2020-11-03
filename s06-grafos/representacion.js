//graphs

var aeropuertos = ['PHX', 'BKK', 'OKC', 'JFK', 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LIM']
var rutas = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

var listaAdyacencia = new Map()

function agregarNodo(input) {
    listaAdyacencia.set(input, [])
}

function agregarArista(origen, destino) {
    listaAdyacencia.get(origen).push(destino)
    listaAdyacencia.get(destino).push(origen)
}

aeropuertos.forEach(agregarNodo)
rutas.forEach(ruta => agregarArista(...ruta))

console.log(listaAdyacencia)

//bfs
function bfs(inicio) {
    var visitado = new Set([inicio])
    var cola = [inicio]

    while(cola.length > 0) {
        var aeropuerto = cola.shift()
        var destinos = listaAdyacencia.get(aeropuerto)
        for(var destino of destinos) {
            if(!visitado.has(destino)) {
                visitado.add(destino)
                cola.push(destino)
            }
        }
    }
    return visitado
}

// console.log(bfs('MEX'))

//dfs
function dfs(inicio, visitado = new Set()) {
    visitado.add(inicio)
    var destinos = listaAdyacencia.get(inicio)
    for(var destino of destinos) {
        if(!visitado.has(destino)) {
            dfs(destino, visitado)
        }
    }
    return visitado
}

console.log(dfs('MEX'))