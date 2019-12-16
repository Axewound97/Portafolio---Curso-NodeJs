var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')

var app = express()
var puerto = process.env.PORT || 3000
var upload = multer({ dest:'static-resourses/img'})

var bd_personas = []

app.use(express.static('./static-resourses'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/personas', function(consulta, respuesta) {
    respuesta.json({personas: bd_personas})
})

app.post('/personas'/*, upload.single('foto_perfil')*/, function(consulta, respuesta) {
    var nombre = consulta.body.nom
    var respuesta_1 = consulta.body.resp1
    var respuesta_2 = consulta.body.resp1
    var respuesta_3 = consulta.body.resp1
    var respuesta_4 = consulta.body.resp1
    //var file = consulta.file.filename
    bd_personas.push({
        nombre: nombre
        // respuesta: [
        //     respuesta1: respuesta_1,
        //     respuesta2: respuesta_2,
        //     respuesta3: respuesta_3,
        //     respuesta4: respuesta_4
        // ]
        //foto_perfil: '/img/' + file
    })
    respuesta.status(201).redirect('./gracias.html')
})

app.listen(puerto, function() {
    console.log('servidor escuchando en el puerto ' + puerto)

})