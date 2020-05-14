// Galeria 1

let imgFull = document.querySelector('.imgFull');
let miniaturas = document.querySelector('.miniaturas');

let qtdFotos = 10;

for (let i = 1; i <= qtdFotos; i++) {
    let imgMini = document.createElement('img');
    imgMini.setAttribute('src', `images/pic${i}.jpg`);
    miniaturas.appendChild(imgMini);
    imgMini.addEventListener('click', setImg);
}

function setImg(e) {
    let srcImg = e.target.getAttribute('src');
    imgFull.setAttribute('src', srcImg);
}

// Galeria 2