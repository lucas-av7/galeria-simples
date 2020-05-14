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

let imgFull2 = document.querySelector('.imgFull2');
let setaDir = document.querySelector('.setaDir');
let setaEsq = document.querySelector('.setaEsq');

let qtdFotos2 = 10;
let fotoAtual  = 1;

setaDir.addEventListener('click', mudarFoto);
setaEsq.addEventListener('click', mudarFoto);

function mudarFoto(e) {

    console.log(e);
    let direcao = e.target.getAttribute('class');
    
    if(fotoAtual === qtdFotos2 && direcao === 'setas setaDir'
     || fotoAtual === 1 && direcao === 'setas setaEsq') {
        return;
    } else {
        switch(direcao) {
            case 'setas setaDir':
                imgFull2.setAttribute('src', `images/pic${fotoAtual+1}.jpg`)
                fotoAtual++;
                break;

            case 'setas setaEsq':
                imgFull2.setAttribute('src', `images/pic${fotoAtual-1}.jpg`)
                fotoAtual--;
                break;

            default:
                return;
        }
    }
    
}