//Задание 1
let x = +prompt('Введите число')
if (typeof x !== 'number') {
  console.log('Упс, кажется, вы ошиблись')
} else if (isNaN(x % 2)) {
  console.log('Ошибка, NaN')
} else if (x % 2 === 0) {
  console.log('Число четное')
} else if (x % 1 == 0 && x % 2 != 0) {
  console.log('число нечетное')
}
else {
  console.log('Введено не дробное число')
}