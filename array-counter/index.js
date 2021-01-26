let num = 10000
let result

function startCount(num){
    return function(){
        num = num+1
        result = num.toString().split('').splice(1)
        console.log(result)
        startCount(num)
    }
}

document.querySelector('.btn').addEventListener('click', startCount(num))
