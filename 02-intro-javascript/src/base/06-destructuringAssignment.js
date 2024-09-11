//Desestructuración o asignación desestructurante
const person = {
    name: 'Jenn',
    age: 30,
    pass: 'Asdf'
}

const {name, age, pass} = person;

// console.log(name);
// console.log(age);
// console.log(pass);

const userContext = ({name, level = 'Admin', pass, age}) => {
    // const {name, age, pass} = user;
    // console.log(name, level);

    return {
        password: pass,
        ages: age,
        latlng: {
            lat: 14.1234,
            lng:-12.1234
        }
    }
}

const {password, ages, latlng: { lat, lng}} = userContext(person);
console.log(password, ages);
console.log(lat, lng);