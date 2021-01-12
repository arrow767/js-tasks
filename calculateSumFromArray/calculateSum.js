let arr = [5, 0, -5, 20, 88, 17, -32]
function calculate(arr) {
    let newArray = arr.filter((value)=>{
        return value >= 0 && value%2
    })
    console.log('Это newArray', newArray)
    return newArray.reduce((prev, current)=>{
            return prev + current
        
    }, 0)
}

function calculate2(arr) {
    return arr.reduce((prev, current)=>{
        return current > 0 && current%2 ? prev + current : prev
    }, 0)
}


// console.log(calculate(arr))
console.log(calculate2(arr))