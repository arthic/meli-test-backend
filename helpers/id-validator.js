const idValido = (id) => {
    const esValido = id.includes('MLA');

    if(!esValido) {
        throw new Error(`El id: ${id} no es valido :(`)
    }
    return true
}

module.exports = {
    idValido
}