var fs = require('fs')
var json = require('./config.json')

fs.mkdirSync(json.titulo)
fs.writeFileSync(`${json.titulo}/index.html`, `<html lang="es">
<head>
    <title>${json.titulo}</title>
    <link rel="stylesheet" href="./estilos.css">
</head>
<body>
    <h1>${json.titulo}</h1>
    <h2>${json.subtitulo}</h2>
    <p>${json.descripcion}</p>
</body>
</html>`) //en el primer parametro se separa la direccion donde crear y el nombre del archivo separados por un /


fs.writeFileSync(`${json.titulo}/estilos.css`, `body {
    margin: 0;
    text-align: center;
    background-color: tomato;
}

h1 {
    background-color: #333;
    color: #fafafa;
    padding: 20px;
}`)