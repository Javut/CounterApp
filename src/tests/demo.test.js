
describe('Test in the file demo.test.js', ()=> {

    test('the strings should be the same', () => { 
    
        // 1. Initialize
        const mensaje = "Hola mundo";
    
        //2. Estimulate
        const mensaje2 = `Hola mundo`;
    
        expect(mensaje).toEqual(mensaje2);
    
        
    })


});

