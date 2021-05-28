function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaAlvo(raio){
    limpaTela();
    let posicaoX = geraPosicaoX();
    let posicaoY = geraPosicaoY();
    desenhaCirculo(posicaoX, posicaoY, raio + 20, 'red'); 
    desenhaCirculo(posicaoX, posicaoY, raio + 10, 'white');
    desenhaCirculo(posicaoX, posicaoY, raio, 'red');
    posicoes = [posicaoX, posicaoY];
}

function geraPosicaoX() {
    return Math.floor(Math.random() * (600 - 0 + 1) ) + 0;
}

function geraPosicaoY() {
    return Math.floor(Math.random() * (400 - 0 + 1) ) + 0;
}

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
const raio = 10;
let posicoes = [];
let posicaoX;
let posicaoY;

let xDisparo;
let yDisparo;

function atualizaTela(){
    desenhaAlvo(raio);
    posicaoX = posicoes[0];
    posicaoY = posicoes[1];
}

setInterval(atualizaTela, 750);

function disparo(event){
    xDisparo = event.pageX - tela.offsetLeft;
    yDisparo = event.pageY - tela.offsetTop;
    comparaDisparo(posicaoX, posicaoY, xDisparo, yDisparo);
}

function comparaDisparo(posicaoX, posicaoY, xDisparo, yDisparo){
    if(xDisparo <= (posicaoX + raio) && xDisparo >= (posicaoX - raio) && yDisparo <= (posicaoY + raio) && yDisparo >= (posicaoY - raio)){ 
       alert('Acertou!');
    }
}

tela.addEventListener('click', disparo);