const thumb1 = document.getElementById('thumb1');
const thumb2 = document.getElementById('thumb2');
const thumb3 = document.getElementById('thumb3');
const circle = document.getElementById('circle');

function slide(number, color){
    document.getElementById('main-image').src = `images/img${number}.png`;
    circle.style.backgroundColor = color;
}
