//Задание 6
const array = [1, 5, 6, 4, 1, 5];
let firstElement = array[0];
let areEqual = true;

for (let i = 1; i < array.length; i++) {
if (array[i] !== firstElement) {
    areEqual = false;
    break;
}
}

console.log(areEqual);