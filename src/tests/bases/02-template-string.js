


//Template String en JS 
const nombre = 'Jaider';
const apellido = 'Vergara';


const nombreCompleto = `${nombre} ${apellido} ${1+5}`

console.log(nombreCompleto); 

export function getSaludo(nombre = 'carlos'){
  return 'Hola' + nombre;

}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`)