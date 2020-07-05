let offset = 0;
let test = document.querySelector('.test');
let x = 0;
let y = 0;
const move = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  test.style.left = x + 'px';
  test.style.top = y + 'px';
  if (e.keyCode == 39 || e.code == 'ArrowRight') {
    offset = offset + 5;
    test.style.left = offset + 'px';
  } else if (e.keyCode == 37 || e.code == 'ArrowLeft') {
    offset = offset - 5;
    test.style.left = offset + 'px';
  }
  console.log(e);
};
window.addEventListener('mousemove', move);
