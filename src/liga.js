function Liga (nombre, numEquipos) {
    this.nombre = nombre
    this.numEquipos = numEquipos
    this.equipos = []
}

Liga.prototype.ascenderEquipo = function(equipo) {
    var index = this.equipos.findIndex(function (e) {
        return e.nombre === equipo.nombre
    })

    if (index === -1) {
        this.equipos.push(equipo)
    } else {
        throw new Error('El equipo ya forma parte de la liga')
    }
}

Liga.prototype.descenderEquipo = function(nombreEquipo) {
    var index = this.equipos.findIndex(function (e) {
        return e.nombre === nombreEquipo
    })

    if (index === -1) {
        throw new Error('El equipo no forma parte de esta liga')
    } else {
        this.equipos.splice(index, 1)
    }
}

module.exports = Liga