import '@testing-library/jest-dom'
import {getUser, getUsuarioActivo} from '../bases/05-funciones.js';


describe('Pruebas en 05-funciones.test.js', () => {

    test('getUser debe retornar un objeto', () => { 

        const userTest = {

            uid: 'ABC123',
            username: 'El_Papi1502'

        }

        const user = getUser();

        expect ( user ).toEqual(userTest);



    })


    
    test('getUser debe retornar un objeto, esta es la version 2', () => { 

        const nombre = 'Jaider';

        const userTest = {

            uid: 'ABC123',
            username: 'Jaider'

        }

        const user = getUsuarioActivo(nombre);

        expect ( user ).toEqual(userTest);



    })



})