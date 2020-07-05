let arr = [];
let calc = {};


//генерируем рнадомное число
function genRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1));
}

//генерируем массив рандомных чисел
function genArray(array, length) {
  for (i = 0; i < length; i++) {
    array.push(genRandom(10, 1));
  }
}

//подсчитываем количество эллементов в массиве
function calcRes(array) {
  for (i = 0; i < arr.length; i++) {
    calc[array[i]] ? calc[array[i]]++ : (calc[array[i]] = 1);
  }
  console.log(calc);
}

genArray(arr, 10);
calcRes(arr);

console.log(arr);
