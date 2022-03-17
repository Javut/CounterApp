


const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 8373737,
    lat: 14.7474,
    lng: 34.78474
  }



};


//Spread para hacer una copia de un objeto 
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );
