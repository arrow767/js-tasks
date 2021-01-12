//Sum Digits

function sumDigits(num){
    return String(num).split('').reduce((acum, corunt)=>
        +acum + +corunt
    )
}

function sumDigits2(num){
    // let result =+ num%10
    if(num <= 0) {
        return num
    }
    return num%10 + sumDigits2(Math.floor(num*0.1))
    
}


// console.log(sumDigits(904))
console.log(sumDigits2(12))