let arr = [];
let calc = {};

function genRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1));
}

function genArray(array, length) {
  for (i = 0; i < length; i++) {
    array.push(genRandom(10, 1));
  }
}

function calcRes(array) {
  for (i = 0; i < arr.length; i++) {
    calc[array[i]] ? calc[array[i]]++ : (calc[array[i]] = 1);
  }
  console.log(calc);
}

genArray(arr, 10);
calcRes(arr);

console.log(arr);
