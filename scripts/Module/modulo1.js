function despedir(nombre){
    console.log(`Adios ${nombre}`);
}
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

module.exports = {
    saludo: saludar,
    despedida: despedir
}