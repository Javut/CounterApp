
//Funciones en JS

const bienvenida = function(nombre){
  return `This is the welcome, ${nombre}`;
}

const saludar = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;



export const getUser = (nombre) => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});
 

// console.log(getUser())

export const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123', 
    username: nombre

  });

  // console.log(getUsuarioActivo().uid)
  // console.log(getUsuarioActivo().username)
  // console.log(getUsuarioActivo().username.length)



