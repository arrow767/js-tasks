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

let elements = document.querySelector('.elements')

for(let i = 0; i < 6; i++){
    elements.querySelector('ul').innerHTML += `<li id="${i}">Пункт${i}</li>`
}

let liElements = elements.querySelectorAll('li')

for(let i = 0; i < liElements.length; i++){
    let element = liElements[i]
    element.addEventListener('click', function(e){
        console.log(this, e.path)
        this.remove()
    })
}