var Jugador = require('../src/jugador.js')
var Equipo = require('../src/equipo.js')

describe('Equipo', function () {
    it('deberia crear un equipo', function () {
        var rm = new Equipo('Real Madrid', 25)

        expect(rm.nombre).toBe('Real Madrid')
        expect(rm.numJugadores).toBe(25)
    })

    it('deberia contratar un jugador', function () {
        var pepe = new Jugador('Pepe', 'defensa')

        var rm = new Equipo('Real Madrid', 25)
        rm.contratarJugador(pepe)
        var listaJugadores = rm.obtenerListaJugadores()

        expect(listaJugadores.length).toBe(1)
        expect(listaJugadores[0]).toBe(pepe)
    })

    it('deberia lanzar un error al contratar mas de una vez al mismo jugador', function () {
        var pepe = new Jugador('Pepe', 'defensa')

        var rm = new Equipo('Real Madrid', 25)
        rm.contratarJugador(pepe)

        expect(function () {
            rm.contratarJugador(pepe)
        }).toThrow(new Error("El jugador ya esta contratado"))
    })
})