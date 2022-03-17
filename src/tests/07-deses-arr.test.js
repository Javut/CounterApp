import '@testing-library/jest-dom'
import { retornaArreglo } from './bases/07-deses-arr';



describe('pruebas en desestructuración', () => {

    test('debe de retornar un string y un numero ', () => { 

        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');

        
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');


    })

})