function Jugador (nombre, posicion) {
    this.nombre = nombre.toUpperCase()
    this.posicion = posicion || 'Delantero'
}

module.exports = Jugador