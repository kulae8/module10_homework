//Задание 2
let x = 5;
typeof x;
console.log(typeof x);
if (typeof x == 'number') {
  console.log('x'+' = число')
}
else if (typeof x == 'string'){
  console.log('x'+' = строка')
}
else if (typeof x == 'boolean')
  console.log('x'+' = логический тип')
else 
  console.log('Тип X не определен');