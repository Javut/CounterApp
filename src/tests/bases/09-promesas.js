import {getHeroeById} from '../bases/08-imp-ex'


export const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
           const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el héroe');
            }
            
           
        }, 1500)
    
    });

    

}
