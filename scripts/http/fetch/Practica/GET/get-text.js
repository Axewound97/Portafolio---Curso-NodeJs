var fetch = require('node-fetch')

var url = 'https://emoji-aleatorio.herokuapp.com/emoji'



async function obtenerEmoji(){
    var resultado = await fetch(url)
    var text = await resultado.text()
    console.log(text)
}

obtenerEmoji()