import heroes, {owners}  from '../data/heroes';

// console.log("Hola Mundo")

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id ===  id);      
    
getHeroeById(1) 

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner )

// console.log(getHeroesByOwner('DC'))
