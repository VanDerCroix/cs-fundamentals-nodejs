//recursion

// n * (n+1) / 2

function sumatoriaHasta(n) {
    if(n <= 0) {
        return 0
    } else {
        return n + sumatoriaHasta(n - 1)
    }
}

console.log(sumatoriaHasta(5))