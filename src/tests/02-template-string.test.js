import '@testing-library/jest-dom';
import {getSaludo} from '../bases/02-template-string';


describe ('Pruebas en 02-template-string.js', () => {

    test('Test in the method getSaludo', () => {

        const nombre = "Jaider";

        const saludo = getSaludo(nombre);
        
        
       expect(saludo).toBe('Hola' + nombre );
       console.log(saludo)




    })


    test('Test to valid parameters in method getSaludo ', () => {

        

        const saludo = getSaludo();
    
        expect(saludo).toBe('Hola' + 'Carlos' );
        console.log(saludo)




    })




});