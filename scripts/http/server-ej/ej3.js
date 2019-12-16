var http = require('http')

var server = http.createServer(function(req, res){
    if(req.url === '/hola'){
        console.log("mundo")
    } else{
        console.log("No encontrado")
    }
})

server.listen(3000)