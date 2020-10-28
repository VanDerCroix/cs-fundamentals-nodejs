/*
Ejercicio - Bag of Words

A partir de un parrafo almacenado en una variable, obtener en un arreglo todas las palabras utilizadas, no deben aparecer palabras repetidas

*/

var cadena = 'Hay golpes en la vida, tan fuertes… ¡Yo no se! Golpes como del odio de Dios; como si ante ellos, la resaca de todo lo sufrido se empozara en el alma… ¡Yo no se!'

function bagOfWords(cadena) {
    //expresion regulares
    var expRegPalabras = /\w+/g
    //  \w metacaracter, encontrar caracteres de una palabra
    //  + cuantificador, agrupar palabras
    //  g modificador, no se detiene en el primer match
    var arrayPalabras = cadena.toLowerCase().match(expRegPalabras)
    console.log(arrayPalabras)
    console.log(arrayPalabras.length)

    var setPalabras = new Set(arrayPalabras)
    console.log(setPalabras)
    console.log(setPalabras.size)
}

bagOfWords(cadena)