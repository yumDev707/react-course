const activeStatus = true;
// const msg = '';
// if(status){
//     msg = 'Activo';
// } else {
//     msg = 'Inactivo';
// }

// const msg = (!activeStatus) ? 'Activo' : 'Inactivo';
const msg = activeStatus && 'Activo';   //Útil cuando queremos manejar algo sólo si la condición se cumple, y en caso contrario no hacer nada.
// const msg = !activeStatus && 'Activo';
console.log(msg);