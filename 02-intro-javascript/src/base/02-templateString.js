const name = 'Jenn';
const lastName = 'Asdf';

// const allName = name + ' ' + lastName;
const allName = `Hello World! It is ${name} ${lastName}`;
console.log(allName);

function getGreeting(name) {
    return 'Hey ' + name;
}

console.log(`New text: ${getGreeting(name)}`);