var Jugador = require('../src/jugador.js')
var Equipo = require('../src/equipo.js')

describe('Equipo', function () {
    it('deberia crear un equipo', function () {
        var rm = new Equipo('Real Madrid', 25)

        expect(rm.nombre).toBe('Real Madrid')
        expect(rm.numJugadores).toBe(25)
    })

    it('deberia contratar un jugador', function () {
        var ronaldo = new Jugador('Ronaldo')
        var barcelona = new Equipo('Barcelona', 25)

        barcelona.contratarJugador(ronaldo)
        
        expect(barcelona.jugadores[0]).toBe(ronaldo)
        expect(barcelona.jugadores.length).toBe(1)
    })

    it('deberia lanzar un error al contratar mas de una vez al mismo jugador', function () {
        var messi = new Jugador('L. Messi')
        var rm = new Equipo('Real Madrid', 25)

        rm.contratarJugador(messi)

        expect(rm.jugadores.length).toBe(1)
        expect( function () {
            rm.contratarJugador(messi)
        } ).toThrow(new Error('El jugador ya esta contratado'))
    })

    it('deberia despedir un jugador', function () {
        var ronaldo = new Jugador('Ronaldo')
        var rm = new Equipo('Real Madrid', 25)
        
        rm.contratarJugador(ronaldo)
        expect(rm.jugadores.length).toBe(1)
        
        rm.despedirJugador(ronaldo.nombre)
        expect(rm.jugadores.length).toBe(0)
    })
    
    it('deberia salirme una excepcion', function () {
        var messi = new Jugador('L. Messi')
        var rm = new Equipo('Real Madrid', 25)
        expect( function () {
            rm.despedirJugador(messi.nombre)
        } ).toThrow(new Error('El jugador no esta actualmente contratado'))
    })

    it('deberia devolverme una lista de jugadores', function () {
        var messi = new Jugador('L. Messi')
        var rm = new Equipo('Real Madrid', 25)

        rm.contratarJugador(messi)

        expect( function () {
            rm.obtenerListaJugadores()
        } )
    })
})