// busqueda secuencial

function busquedaSecuencial(arreglo, elemento) {
    for(var i=0; i<arreglo.length; i++) {
        if(arreglo[i] == elemento) {
            console.log(`${elemento} encontrado, indice: ${i}`)
            return i
        }
    }
    console.log(`elemento no encontrado`)
}

var nombres = ['demetrio', 'guillermina', 'medorio']
busquedaSecuencial(nombres, 'pepe')

var nums = [1,5,7,8,2,49,88]
busquedaSecuencial(nums, 49)

var misc = [true, 'hola', 3.14, 100]
busquedaSecuencial(misc, 'hola')