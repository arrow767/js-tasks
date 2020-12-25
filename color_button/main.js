
// КНОПКА
let button = document.querySelector('#button')
button.style.backgroundColor = "green"
function changeColor () {
  setTimeout(()=> {
    if(button.style.backgroundColor === "green") {
      button.style.backgroundColor = "blue"
    } else if (button.style.backgroundColor === "blue"){
      button.style.backgroundColor = "green"
    }

    changeColor()
  },1000)
}

changeColor()

// Фон
let time = new Date;
let h = time.getHours().toString();
console.log(h)
let m = time.getMinutes().toString();
let s = time.getSeconds().toString();



let back = document.querySelector('body')
let text = document.querySelector('h1')
function changeBack () {

 

    let time = new Date;
let h = time.getHours().toString();
console.log(h)
let m = time.getMinutes().toString();
let s = time.getSeconds().toString();
    if(h.length > 2){
      h = "0" + h;
    }
    
    if(m.length > 2){
      m = "0" + m;
    }
    
    if(s.length > 2){
      s = "0" + s;
    }
      text.innerText = `${h}:${m}:${s}`;
      back.style.backgroundColor = "#"+h+m+s;
    
}

changeBack()
setInterval(changeBack, 1000)



// function changeColor (){
//   let button = document.querySelector('#button').style
//   button.backgroundColor = "red"
//   // if(button.style.backgroundColor === 'green'){
//   //   button.style.backgroundColor = 'blue'
//   // }
// }

