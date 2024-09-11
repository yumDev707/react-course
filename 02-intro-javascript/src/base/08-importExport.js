// import {heroes} from './data/heroes';
// import heroes from './data/heroes'; //Exportación por defecto.
// import heroes from './data/heroes';
import heroes, {owners} from '../data/heroes';

// console.log(heroes);
// console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find((hero) => hero.id === id);
}
// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);  //Forma simplificada. Utilizamos filter porque puede haber más de un resultado.
// console.log(getHeroeByOwner('DC'));