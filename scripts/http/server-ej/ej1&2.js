var http = require("http")

var url = process.argv[2]
var ver = process.argv[3]

function respuesta(){ // ######################## EJ1 ##############################################
    var conexion = http.get(url, function(response) {
        var data = ""
      
        response.setEncoding("utf8")
        response.on("data", function(bloque) {
          data += bloque
        })
        response.on("end", function() {
          console.log(`Respuesta: ${data}\n`)
          var json = JSON.parse(data)
        })
      })
      
      conexion.on("error", function(error) {
        console.error(error)
      })
}
function atributos(){ //######################### VER ATR ##########################################
    var conexion = http.get(url, function(response) {
        var data = ""
      
        response.setEncoding("utf8")
        response.on("data", function(bloque) {
          data += bloque
        })
        response.on("end", function() {
            var json = JSON.parse(data)
          console.log(`Atributos: ${Object.keys(json)}\n`)
        })
      })
      
      conexion.on("error", function(error) {
        console.error(error)
      })
}
function valores(){ //######################## VER VALORES #####################################
    var conexion = http.get(url, function(response) {
        var data = ""
      
        response.setEncoding("utf8")
        response.on("data", function(bloque) {
          data += bloque
        })
        response.on("end", function() {
            var json = JSON.parse(data)
          console.log(`Valores: ${Object.values(json)}\n`)
        })
      })
      
      conexion.on("error", function(error) {
        console.error(error)
      })
}

function valThis(){ // ######################## EJ2 ##############################################
    var conexion = http.get(url, function(response) {
        var data = ""
      
        response.setEncoding("utf8")
        response.on("data", function(bloque) {
          data += bloque
        })
        response.on("end", function() {
          var json = JSON.parse(data)
          console.log(json.this)
        })
      })
      
      conexion.on("error", function(error) {
        console.error(error)
      })
}


if(ver === "rta"){
    respuesta()
} // ######################## EJ1 ##############################################
else if(ver === "atr"){
    atributos()
} //######################### VER ATR ##########################################
else if(ver === "val"){
    valores()
} //######################## VER VALORES #####################################
else if(ver === "valThis"){
    valThis()
}// ######################## EJ2 ##############################################