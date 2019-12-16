var fs = require('fs')
var fetch = require('node-fetch')


var url = 'https://nperrin.io'

async function getSalida(){
    var resultado = await fetch(url,{
        headers: {
            Accept: 'text/html',
            charset: 'utf-8'
        }
    })
    var html = await resultado.text()
    fs.writeFileSync('salida.html', html)
}

getSalida()