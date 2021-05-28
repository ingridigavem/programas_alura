

function desenhaQuadrado(x, y, cor){
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);

    pincel.strokeStyle = 'black';
    pincel.strokeRect(x, y, 50, 50);
}

for (let x = 0; x < 600; x += 50) {
    for (let y = 0; y < 400; y += 50) {
        desenhaQuadrado(x, y, 'red');
    }
}
