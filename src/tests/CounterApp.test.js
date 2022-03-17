import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en el  <CounterApp />', () => { 

    let wrapper;

    beforeEach(() => {
        
        const value = 10;
        wrapper = shallow(<CounterApp value={value}/>);
    })

    

    test('debe de mostrar <CounterApp /> correctamente ', () => { 

        
        expect(wrapper).toMatchSnapshot();

     }); 


     test('debe de mostrar el valor por defecto de 100', () => { 

        const value = 100;
        const wrapper = shallow(<CounterApp  value = {value}
            />
            );

            const valueForDefault = wrapper.find('h2').text().trim();
            expect(valueForDefault).toBe('100');

      })

      test('debe incrementar con el boton +1', () => { 

        // const value = 10;
        // const wrapper = shallow(<CounterApp value={value}/>);
        wrapper.find('button').at(0).simulate('click');
        const valueCounter = wrapper.find('h2').text().trim();
        console.log("Aqui va el counterText" + valueCounter);
        expect(valueCounter).toBe('11');


      })

      test('debe decrementar con el boton -1', () => { 

        // const value = 10;
        // const wrapper = shallow(<CounterApp value={value}/>);
        wrapper.find('button').at(2).simulate('click');
        const valueCounter = wrapper.find('h2').text().trim();
        console.log("Aqui va el counterText" + valueCounter);
        expect(valueCounter).toBe('9');


      })

      test('Prueba del boton reset', () => { 

        // const value = 10;
        // const wrapper = shallow(<CounterApp value={value}/>);
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valueCounter = wrapper.find('h2').text().trim();
        console.log("Aqui va el counterText" + valueCounter);
        expect(valueCounter).toBe('10');


      })



})
