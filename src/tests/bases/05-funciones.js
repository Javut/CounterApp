
//Funciones en JS

const bienvenida = function(nombre){
  return `This is the welcome, ${nombre}`;
}

const saludar = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;





console.log(saludar('Naruto'))
console.log(bienvenida('Joselito'))
console.log(saludar4());

// const getUser = () => ({
//   uid: 'ABC123',
//   username: 'El_Papi1502'
// });
 

// console.log(getUser())

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567', 
    username: 'Jaider'

  });

  console.log(getUsuarioActivo().uid)
  console.log(getUsuarioActivo().username)
  console.log(getUsuarioActivo().username.length)



