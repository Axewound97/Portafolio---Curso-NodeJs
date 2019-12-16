var fetch = require('node-fetch')


var url = 'https://autentificarse-tranqi.herokuapp.com/registrar?nombre=[Maximiliano]'


async function getAutenticacion(){
    var token = await fetch(url)
    var url2 = `https://autentificarse-tranqi.herokuapp.com/acceder?token=[${token}]`
    var resultado = await fetch(url2, {
        Accept: 'text/plain'
    })
    resultado = await resultado.text()
    console.log(resultado)
    
}


getAutenticacion()