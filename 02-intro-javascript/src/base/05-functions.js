const hey = (name) => {
    return `Hello ${name}`;
}

const heyShort = (name) => `Hello ${name}`;

console.log(hey('Jenn'));
console.log(heyShort('Jennifer'));

const getUser = () => ({    //Con este paréntesis sin return indicamos que queremos devolver un obj.
        uid: 'ABCD',
        username: 'UserAdmin'
});

console.log(getUser());

//Tarea
//1. Transformar a una función flecha.
//2. Que retome un objeto implícito.
//3. Pruebas.
// function getActiveUser(name) {
//     return {
//         uid: 'ABCD',
//         username: name
//     }
// };

// const activeUser = getActiveUser('Jennifer D.');
// console.log(activeUser);

const activeUser = (name) => ({
        uid: 'ABCD',
        username: name
});

console.log(activeUser('Jennifer D.'));