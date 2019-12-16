var fs = require('fs')

var ruta = process.argv[2]

var archivo = fs.readFileSync('./ej5.js', 'utf-8')

console.log(archivo)

//#####################FIN EJERCICIO 6############################