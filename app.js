// console.log("Hello World")

// segunda prueba

// const sum = (a,b) => {
//  return a+b
// }

// solo un registro en consola para nosotros.
// console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };

//TERCERO; El siguiente paso es crear un archivo test.js en la raíz del proyecto que incluirá nuestras pruebas.

// node app.js


//EJERCICIO 10:

// one euro is:
let oneEuroIs = {
    "JPY": 127.93, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// one yen is
let oneYenIs = {
    "EUR": 0.0074,
    "USD": 0.0078,
    "GBP": 0.0063,
}

// one dollar is
let oneDollarIs = {
    "EUR": 0.8333,
    "JPY": 127.93,
    "GBP": 0.81,
}


let fromYenToPound = function (yenes){
    let totalpound = oneYenIs["GBP"] * yenes
    return totalpound
}
console.log(fromYenToPound())

let fromDollarToYen = function (dollar) {
    let totalyen = oneEuroIs["JPY"] * dollar
    return totalyen
}
console.log(fromDollarToYen())

let fromEuroToDollar = function (euros){
     let totaldolar = oneEuroIs["USD"] * euros
     return totaldolar
}
console.log(fromEuroToDollar());

module.exports = {fromEuroToDollar, fromYenToPound, fromDollarToYen}