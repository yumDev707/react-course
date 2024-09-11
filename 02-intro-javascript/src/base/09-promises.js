import {getHeroeById} from './base/08-importExport';

// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve();  //Pasa a ejecutar el método then.
//         // console.log('Dos segundos después...');

//         //Tarea.
//         //Importar la función getHeroeById de la anterior clase.
//         const hero = getHeroeById(2);
//         resolve(hero);
//         reject('No se pudo encontrar el héroe. :(');
//     }, 2000);
// });

// prom.then((hero) => {
//     console.log('Heroe: ', hero);
// })
// .catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id);
            if(hero){
                resolve(hero);
            } else if (hero == undefined) {
                reject('No se ha encontrado ningún héroe.')
            }
        }, 2000);
    });
}

getHeroByIdAsync(4)
    .then(console.log) //.then(hero => console.log('Héroe: ', hero))
    .catch(console.warn);   //.catch(err => console.warn(err));