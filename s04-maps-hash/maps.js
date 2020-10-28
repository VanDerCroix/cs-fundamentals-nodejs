// maps

var miMapa = new Map()
miMapa.set(123, 'valor tipo numerico')
miMapa.set('abc', 'valor tipo cadena')
miMapa.set(true, 'valor tipo booleano')

console.log(miMapa)

console.log(miMapa.get('abc'))
console.log(miMapa.get(123))
console.log(miMapa.get(true))

miMapa.set(NaN, 'valor tipo no numerico')
miMapa.set(null, 'valor nulo')
console.log(miMapa.get(NaN))
console.log(miMapa.get(null))

var arregloMapa = Array.from(miMapa)
console.log(arregloMapa)

miMapa.clear()

var claveObj = {}
var claveFunc = function() {}
var claveCadena = 'cadena'

miMapa.set(claveObj, 'valor asociado a un obj')
miMapa.set(claveFunc, 'valor asociado a una func')
miMapa.set(claveCadena, 'valor asociado a una cadena')

console.log(miMapa.get(claveObj))
console.log(miMapa.get(claveFunc))
console.log(miMapa.get(claveCadena))

console.log(miMapa.get({}))
console.log(miMapa.get(function(){}))
console.log(miMapa.get('cadena'))

