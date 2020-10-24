//merge sort

function mezclar(izq, der) {
    var resultado = []
    var i = 0
    var d = 0
    while (i < izq.length && d < der.length) {
        if(izq[i] < der[d]) {
            resultado.push(izq[i])
            i++
        } else {
            resultado.push(der[d])
            d++
        }
    }
    while (i < izq.length) {
        resultado.push(izq[i])
        i++
    }
    while (d < der.length) {
        resultado.push(der[d])
        d++
    }
    return resultado
    // .concat(izq.slice(i))
    // .concat(der.slice(d))
}

function ordenamientoPorMezcla(arreglo) {
    if(arreglo.length < 2) {
        return arreglo
    }

    var ind = Math.floor(arreglo.length / 2)
    var arrIzq = arreglo.slice(0, ind)
    var arrDer = arreglo.slice(ind)

    return mezclar(
        ordenamientoPorMezcla(arrIzq),
        ordenamientoPorMezcla(arrDer)
    )
}


var arr = [6,5,4,3,2,1]
console.log(ordenamientoPorMezcla(arr))

