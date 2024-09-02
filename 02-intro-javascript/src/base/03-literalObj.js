const person = {
    name: 'Jenn',
    age: 30,
    address: {
        country: 'País Feliz',
        firstLine: 'Calle de la Piruleta'
    }
};
console.log(person);

const secondPerson = person;
secondPerson.name = 'Jennifer';
console.log(secondPerson);  //Copia de la referencia del espacio en memoria de la variable original. No debemos hacerlo nunca.
console.log(person);    //Se modifica el objeto original.

const thirdPerson = {...person};    //De esta manera tenemos un clon del objeto inicial.
thirdPerson.name = 'Yum';
console.log(thirdPerson);
console.log(person);