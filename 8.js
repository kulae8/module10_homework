//Задание 8
let myMap = new Map();
myMap.set('name', 'Aleksey');
myMap.set('age', 29);
myMap.set(true, 'last');
myMap.set('ivan', 50);

for (let pair of myMap.entries()) {
    console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
  }