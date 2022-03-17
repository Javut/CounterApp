import '@testing-library/jest-dom'
import { getImagen } from "./bases/11-async-await"


describe('Pruebas con el async y Fetch', () => { 


    test('debe de retornar el url de la imagen', async() => { 

        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);


     })


 })