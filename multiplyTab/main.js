let app = document.querySelector('.app') 

for(let i = 1; i <= 10; i++){
  for(let k = 1; k <= 10; k++) {
    app.innerHTML += `${i}*${k}=${i*k}</br>`
  }
app.innerHTML += `<hr>`
}