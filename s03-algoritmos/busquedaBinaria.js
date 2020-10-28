//binary search

function busquedaBinaria(arreglo, objetivo) {
    var izq = 0
    var der = arreglo.length - 1
    var ind
    while (izq <= der) {
        ind = Math.floor((der + izq) / 2)
        if(arreglo[ind] == objetivo) {
            console.log(`${objetivo} encontrado`)
            return ind
        } else if(arreglo[ind] < objetivo) {
            izq = ind + 1
        } else {
            der = ind - 1
        }
    }
    console.log('elemento no encontrado')
}

var nums = [1,2,3,4,5,6,7,8,9]
busquedaBinaria(nums, 11)