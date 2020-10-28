//hash function

function hashFunction(name, space) {
    var nameChars = Array.from(name.substring(0,3))
    // console.log(nameChars)
    //charCodeAt
    var subTotal = nameChars.map(c => c.charCodeAt(0)).reduce((n,s) => n+s)
    // console.log(subTotal)
    var hashValue = subTotal % space
    // console.log(hashValue)

    return hashValue
}

module.exports = { hashFunction }

// var spaces = 8
// hashFunction('bulbasaur', spaces)
// hashFunction('charmander', spaces)
// hashFunction('squirtle', spaces)
// hashFunction('sandshrew', spaces)