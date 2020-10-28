//arrays

let arreglo1 = [1,2,3]
// console.log(arreglo1)

let arreglo2 = Array(6)
arreglo2.fill(1)
// console.log(arreglo2)

let pokemon = ['charmander', 'bulbasaur', 'squirtle']

// console.log(pokemon[4])

function buscarNombre(nom) {
    pokemon.forEach(function(elemento, indice) {
        if (elemento == nom)
            console.log(elemento, indice)
    })
}

buscarNombre('squirtle')

pokemon.push('pikachu')
console.log(pokemon)

pokemon.splice(1,1)
console.log(pokemon)
