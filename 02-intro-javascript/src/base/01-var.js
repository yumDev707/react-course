//Variables y constantes
const name = 'Jenn';
const lastName = 'Asdf';
let value = 5;

console.log(name, lastName, value);

if (true){
    let value = 10; //Diferente scope.
    console.log(value);
}

console.log(value);