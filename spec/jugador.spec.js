var Jugador = require('../src/jugador.js')

describe('Jugador', function () {
    it('deberia crear un jugador', function () {
        var j = new Jugador('Pepe', 'defensa')
        expect(j.nombre).toBe('Pepe')
        expect(j.posicion).toBe('defensa')
    })
})