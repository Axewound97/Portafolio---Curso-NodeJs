var fs = require('fs')
var json = require('./config.json')

var index = fs.readFileSync('./index.html', 'utf-8')

var nuevoIndex = index.replace('< h1 > @titulo @ </ h1 >', `< h1 > ${json.titulo} </ h1 >`)

var nuevoIndex1 = nuevoIndex.replace('< h2 > @subtitulo @ </ h2 >', `< h2 > ${json.subtitulo} </ h2 >`)

var nuevoIndex2 = nuevoIndex1.replace('< p > @descripcion @ </ p >', `< p > ${json.descripcion} </ p >`)

console.log(nuevoIndex2)