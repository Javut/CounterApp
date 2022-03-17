


const personajes = ['Goku','Vegeta','Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );

export const retornaArreglo = () => {
  return ['ABC', 123];
}

const arr = retornaArreglo();
console.log(arr);

// -------------------------------------------------------------------
const useState = (valor) => {

  return [valor, () => {console.log('Hola Mundo')}];

}

const [nombre, setNombre] = useState('Goku');


console.log(nombre);
setNombre();
