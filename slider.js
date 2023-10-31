const imgWidth = 1400;
const textWidth = 1100;

const img = img_slider.querySelector('ul');
const text = text_slider.querySelector('ul');

const imgElems = img_slider.querySelector('li');
const textElems = text_slider.querySelector('li');

let imgPos = 0;
let textPos = 0;

document.getElementById('color1').onclick = function() {
    imgPos = 0
    img.style.marginLeft = imgPos

    textPos = 0
    text.style.marginLeft = textPos
}

document.getElementById('color2').onclick = function() {
    imgPos = -imgWidth
    img.style.marginLeft = imgPos + 'px'

    textPos = -textWidth
    text.style.marginLeft = textPos + 'px'
}

document.getElementById('color3').onclick = function() {
    imgPos = -imgWidth * 2
    img.style.marginLeft = imgPos + 'px'

    textPos = -textWidth * 2
    text.style.marginLeft = textPos + 'px'
}

document.getElementById('color4').onclick = function() {
    imgPos = -imgWidth * 3
    img.style.marginLeft = imgPos + 'px'

    textPos = -textWidth * 3
    text.style.marginLeft = textPos + 'px'
}