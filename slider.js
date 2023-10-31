const imgWidth = 1400;
const textWidth = 1000;

const img = img_slider.querySelector('ul');
const text = text_slider.querySelector('ul');

const imgElems = img_slider.querySelector('li');
const textElems = text_slider.querySelector('li');

let pos = 0

document.getElementById('color1').onclick = function() {
    pos = 0
    list.style.marginLeft = pos
}

document.getElementById('color2').onclick = function() {
    pos = -width
    list.style.marginLeft = pos + 'px'

}

document.getElementById('color3').onclick = function() {
    pos = -width * 2
    list.style.marginLeft = pos + 'px'
}

document.getElementById('color4').onclick = function() {
    pos = -width * 3
    list.style.marginLeft = pos + 'px'
}