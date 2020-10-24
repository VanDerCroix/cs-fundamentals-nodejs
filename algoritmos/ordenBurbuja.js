//bubble sort

function ordenamientoBurbuja(arreglo) {
    var continuar = true
    while (continuar) {
        continuar = false
        for(var i = 1; i < arreglo.length; i++) {
            if(arreglo[i-1] > arreglo[i]) {
                var temp = arreglo[i]
                arreglo[i] = arreglo[i-1]
                arreglo[i-1] = temp
                continuar = true
            }
        }

        console.log(arreglo.join(','))
    }
}

var arr1 = [12,1,8,3,4,6,10,2]
ordenamientoBurbuja(arr1)