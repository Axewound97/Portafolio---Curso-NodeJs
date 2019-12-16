var fetch = require('node-fetch')


var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function getSalida(){
    var resultado = await fetch(url,{
        headers: {
            Accept: 'text/plain',
            charset: 'utf-8'
        }
    })
    var text = await resultado.text()
    console.log(text)
}

getSalida()