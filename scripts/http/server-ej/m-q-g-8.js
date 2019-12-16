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
    if(objUrl.pathname === '/emoji'){ //no es necesario este if, ya que si no se especifica indice se ejecuta sin parametro
        var emoji = obtenerEmoji(ind)
        var respuesta_obj = {"emoji": emoji}
        var respuesta_html = `<h1 style="text-align:center;">${emoji}</h1>`
        var respuesta_text = `${emoji}`
        if(req.headers.accept === 'application/json'){
            res.setHeader('content-type', 'application/json') //especifica la salida(muestra las caritas xd)
            res.end(JSON.stringify(respuesta_obj)) //devolver JSON
        } else if(req.headers.accept === 'text/html'){
            res.setHeader('content-type', 'text/html')
            res.end(respuesta_html)
        } else if(req.headers.accept === 'text/plain'){
            res.setHeader('content-type', 'text/plain')
            res.end(respuesta_text)
        } else{
            res.setHeader('content-type', 'application/json') //especifica la salida(muestra las caritas xd)
            res.end(respuesta_obj)
        }
        
    } else{
        var emoji2 = obtenerEmoji()
        res.end(emoji2)
    }
})

server.listen(3000)