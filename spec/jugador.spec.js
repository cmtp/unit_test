var Jugador = require('../src/jugador.js');
describe('Jugador', function () {
    
    it('deberia crear un jugador', function () {
        var pepe = new Jugador('Pepe', 'Defensor');

        expect(pepe.nombre).toBe('PEPE');
        expect(pepe.posicion).toBe('Defensor');
    })

    it('deberia crear un jugador que sea delantero por defecto', function () {
        var pepe = new Jugador('Pepe');

        expect(pepe.nombre).toBe('PEPE');
        expect(pepe.posicion).toBe('Delantero');
    })
})
console.log(Jugador);