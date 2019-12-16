var fetch = require('node-fetch')

var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function obtenerEmoji(){
    var resultado = await fetch(url)
    var json = await resultado.json()
    console.log(json)
}

obtenerEmoji()