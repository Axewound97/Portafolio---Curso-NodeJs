var express = require('express')
var ClienteMongo = require('mongodb').MongoClient

var servidor = express()

var puerto = process.env.PORT || 3000

var url = ''
var nombre_base = 'test'

ClienteMongo.connect(url, async function(err, cliente){
    if(err){
        console.log('hubo un error ' + err.stringify(err))
        process.exit(1)
    }
    console.log('exitosa')
    

})

servidor.use(express.static('./front'))

servidor.listen(puerto, function() {
    console.log('escuchando en el puerto ' + puerto)
})

servidor.get('/api/perros', async function (consulta, respuesta){
    var perros = await mongo.collection('perros').find().toArray()
    respuesta.json(perros)

})

