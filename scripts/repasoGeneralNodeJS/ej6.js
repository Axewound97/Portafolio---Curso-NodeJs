var fs = require('fs')
var slug = require(`./ej5.js`)

var nombreCarp = process.argv[2]

nombreCarp = nombreCarp.toLowerCase()
nombreCarp = slug.acentos(nombreCarp) //se agrego funcion eliminarAcentos en el ej5
nombreCarp = slug.reemplazo(nombreCarp)

fs.mkdirSync(nombreCarp) //se tuvo que modificar el ej5 (return por console.log)