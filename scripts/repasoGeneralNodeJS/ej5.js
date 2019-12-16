function reemplazarTexto(texto){
    texto = texto.replace(/ /g,"-")

    return texto //se cambio el console log para el ej6
}
function eliminarAcentos(texto){
    texto = texto.toLowerCase()
    texto = texto.replace(/á/g, "a")
    texto = texto.replace(/é/g, "e")
    texto = texto.replace(/í/g, "i")
    texto = texto.replace(/ó/g, "o")
    texto = texto.replace(/ú/g, "u")
    return texto
}

module.exports = {
    reemplazo: reemplazarTexto,
    acentos: eliminarAcentos
} // se importa en el ej4