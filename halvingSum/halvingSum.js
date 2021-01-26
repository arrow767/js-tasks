/*
В функцию halvingSum передаётся число, необходимо реализовать функцию так, чтобы она вернула сумму всех целых чисел:

n+n/2+n/4+n/8+...

То есть, если передаём 25, то получаем 47
25+12+6+3+1=47
*/

function halvingSum(num){
    if(num === 1) return num
    return num + halvingSum(Math.floor(num / 2))
}

console.log(halvingSum(25))//47