var http = require('http')

function obtenerEmoji(indice) {
    var emojis = ["😀", "😳", "😄", "😁", "😆", "😅", "😂", "😴", "🤭️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🤤", "😙", "😚", "😋", "😛", "😝", "😜", "😎", "🤓", "🥳", "🤯", "😡", "😱", "🥺", "😏"]
    if (!indice) {
        var random = Math.floor(Math.random() * 33)
        return emojis[random]
    }
    return emojis[indice]
}

var server = http.createServer(function(req, res){
    var emoji = obtenerEmoji()
    if(req.url === '/emoji'){
        res.end(emoji)
    } else{
        res.end("No encontrado")
    }
})

server.listen(3000)



