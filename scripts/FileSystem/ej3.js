var fs = require('fs')

var nom = process.argv[2] //obtiene primer parametro
var contenido = process.argv[3] //obtiene segundo parametro

fs.writeFileSync(nom, contenido) //crea un archivo 1er parametro; nombre archivo, 2do; contenido del archivo

//#####################FIN EJERCICIO 3############################