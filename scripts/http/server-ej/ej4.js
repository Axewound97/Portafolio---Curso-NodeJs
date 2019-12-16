var http = require('http')


var server = http.createServer(function(req, res){
    var respuesta = JSON.stringify({ "respuesta": "mundo" })
    res.end(respuesta)
})

server.listen(3000)