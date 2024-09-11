const firstArray = [1, 2, 3];
let secondArray = firstArray;
secondArray.push(4);    //Modifica el primer array.

let thirdArray = [...firstArray, 5];

const fourthArray = thirdArray.map( function(num) {
    return num + 1;
});

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);
console.log(fourthArray);