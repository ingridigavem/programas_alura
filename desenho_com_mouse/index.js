
function desenhaQuadrado(x, y, tamanho, cor) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenhaPaletaDeCores() {
    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');
    desenhaQuadrado(xAmarelo, yQuadrados, tamanhoQuadrados, 'yellow');
}

function lidaComMovimentoDoMouse(evento) {
    xMouse = evento.pageX - tela.offsetLeft;
    yMouse = evento.pageY - tela.offsetTop;

    if(desenha) {
        desenhaCirculo(xMouse, yMouse, 5, corAtual);
    }
}

function habilitaDesenhar() {
    desenha = true;
}

function desabilitaDesenhar() {
    desenha = false;
}

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

let desenha = false;
let corAtual = 'blue';
let xVermelho = 0;
let xVerde  = 50;
let xAzul = 100;
let xAmarelo = 150;
let yQuadrados = 0;
let tamanhoQuadrados = 50;
let xMouse;
let yMouse;

desenhaPaletaDeCores();

tela.onmousemove = lidaComMovimentoDoMouse;
tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;

tela.onclick = trocaCor;

function trocaCor(){
    if(xMouse <= 50 && xMouse >= 0 && yMouse >= yQuadrados && yMouse <= tamanhoQuadrados){
        corAtual = 'red';
    } else if(xMouse <= 100 && xMouse >= 50 && yMouse >= yQuadrados && yMouse <= tamanhoQuadrados){
        corAtual = 'green';
    } else if(xMouse <= 150 && xMouse >= 100 && yMouse >= yQuadrados && yMouse <= tamanhoQuadrados){
        corAtual = 'blue';
    } else if(xMouse <= 200 && xMouse >= 150 && yMouse >= yQuadrados && yMouse <= tamanhoQuadrados){
        corAtual = 'yellow';
    }
}