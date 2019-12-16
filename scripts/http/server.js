var http = require("http")
var URL = require("url")

var host = "127.0.0.1"
var port = 3000

var alumnos = [
  {
    nombre: "norman",
    aprobado: true,
    edad: 25
  },
  {
    nombre: "juan",
    aprobado: false,
    edad: 28
  },
  {
    nombre: "pepe",
    aprobado: true,
    edad: 20
  }
]

var server = http.createServer(function(req, res) {
  if (req.method !== "GET") {
    res.statusCode = 401
    res.end("Error: se esperaba una conexión GET\n")
  }

  var objetoUrl = URL.parse(req.url)
  if (objetoUrl.pathname === "/alumnos") {
    var respuesta = JSON.stringify({ alumnos: alumnos })
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(respuesta)
  } else {
    res.statusCode = 404
    res.end("Error: endpoint no encontrado\n")
  }
})

server.listen(port, host, function() {
  console.log(`Servidor escuchando en http://${host}:${port}/`)
})