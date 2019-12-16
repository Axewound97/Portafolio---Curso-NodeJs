var fs = require('fs')

    fs.writeFileSync('index.html', `
    < html  lang = " es " >
    < cabeza >
        < título > @titulo @ </ título >
    </ cabeza >
    < cuerpo >
        < h1 > @titulo @ </ h1 >
        < h2 > @subtitulo @ </ h2 >
        < p > @descripcion @ </ p >
    </ cuerpo >
    </ html >`) //escribe un archivo, parametros; 1er;nombre archivo, 2do; contenido archivo

//#####################FIN EJERCICIO 4############################