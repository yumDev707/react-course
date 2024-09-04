const characters = ['Fry', 'Leela', 'Bender'];
// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);

const [p1] = characters;    //Primer elemento.
console.log(p1);
const [, p2] = characters;  //De esta forma ignora el primer elemento del array.
console.log(p2);

const returnArray = () => {
    return['ABC', 123];
}
const [letters, numbers] = returnArray();
console.log(letters, numbers);


//Tarea
// 1. El primer valor del arr será nombre.
// 2. El segundo valor será setNombre.
const greeting = (value) => {
    return [value, () => {
        console.log(value);
        console.log('Hello World');
    }]
}

const [nombre, setNombre] = greeting('Jenn');
setNombre();