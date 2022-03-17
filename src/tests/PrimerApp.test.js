import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => { 

    test('debe de mostrar <PrimeraApp /> correctamente ', () => { 

        const saludo = 'Hola Soy Jaider';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} />);

        expect(wrapper).toMatchSnapshot();

     }); 


     test('debe de mostrar el subtitulo enviado por props', () => { 

        const saludo = 'Hola, soy Jaider';
        const subtitulo = 'Hola soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
            saludo = {saludo} 
            subtitulo={subtitulo}
            />
            );

            const textoParrafo = wrapper.find('p').text();
            expect(textoParrafo).toBe(subtitulo);

      })



})
