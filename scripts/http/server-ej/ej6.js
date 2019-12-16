var http = require('http')
var URL = require('url')


function obtenerEmoji(indice) {
    var emojis = ["😀", "😳", "😄", "😁", "😆", "😅", "😂", "😴", "🤭️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🤤", "😙", "😚", "😋", "😛", "😝", "😜", "😎", "🤓", "🥳", "🤯", "😡", "😱", "🥺", "😏"]
    if (!indice) {
        var random = Math.floor(Math.random() * 33)
        return emojis[random]
    }
    return emojis[indice]
}

var server = http.createServer(function(req, res){
    var objUrl = URL.parse(req.url)
    var busqueda = new URL.URLSearchParams(objUrl.query)
    var ind = busqueda.get('indice')
    res.setHeader('content-type', 'application/json') //especifica la salida(muestra las caritas xd)
    if(busqueda.get('indice') != null){ //no es necesario este if, ya que si no se especifica indice se ejecuta sin parametro
        var emoji = obtenerEmoji(ind)
        var respuesta_obj = {respuesta: emoji}
        res.end(JSON.stringify(respuesta_obj)) //devolver JSON en formato string
    } else{
        var emoji2 = obtenerEmoji()
        res.end(emoji2)
    }
})

server.listen(3000)