function Equipo (nombre, numJugadores) {
    this.nombre = nombre
    this.numJugadores = numJugadores
    this.jugadores = []
}

Equipo.prototype.contratarJugador = function(jugador) {
    var index = this.jugadores.findIndex(function (j) {
        return j.nombre === jugador.nombre
    })

    if (index === -1) {
        this.jugadores.push(jugador)
    } else {
        throw new Error('El jugador ya esta contratado')
    }
};

Equipo.prototype.despedirJugador = function (nombreJugador) {
    var index = this.jugadores.findIndex(function (j) {
        return j.nombre === nombreJugador
    })

    if (index === -1) {
        throw new Error('El jugador no esta actualmente contratado')
    } else {
        this.jugadores.splice(index, 1)
    }
}

Equipo.prototype.obtenerListaJugadores = function() {
    return this.jugadores;
};

module.exports = Equipo
