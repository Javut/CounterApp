import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../bases/08-imp-ex';
import heroes from '../data/heroes';


describe('pruebas en funciones de heroes', () => { 


    test('debe retornar un heroe por id', () => { 

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id );

        console.log(heroe);

        expect(heroe).toEqual(heroeData);




    })


    test('debe retornar un undefined si el Heroe no existe', () => { 

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })


    test('debe de retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner );

        // console.log(heroeData);
        expect(heroe).toEqual(heroeData);
    })


    test('debe de retornar un arreglo con los heroes de marvel', () => { 

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner );

        expect(heroe).toEqual(heroeData);
        expect(heroe.length).toBe(2);
    })




 })